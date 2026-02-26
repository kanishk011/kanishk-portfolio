import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import SendRounded from '@mui/icons-material/SendRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import PhoneRounded from '@mui/icons-material/PhoneRounded';
import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GlassCard from '../common/GlassCard';
import { profileInfo } from '../../data/mockData';
import { staggerContainer, staggerItem } from '../../utils/animations';

const contactItems = [
  { icon: <EmailRounded />, label: 'Email', value: profileInfo.email, href: `mailto:${profileInfo.email}` },
  { icon: <PhoneRounded />, label: 'Phone', value: profileInfo.phone, href: `tel:${profileInfo.phone}` },
  { icon: <LocationOnRounded />, label: 'Location', value: profileInfo.location },
  { icon: <GitHubIcon />, label: 'GitHub', value: 'kanishk011', href: profileInfo.github },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'Kanishk M', href: profileInfo.linkedin },
];

type FormFields = 'name' | 'email' | 'subject' | 'message';
type FormErrors = Partial<Record<FormFields, string>>;

const WEB3FORMS_KEY = '9e5d4450-1051-464f-99c7-2f99b0ef620a';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: Record<FormFields, string>): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(form.email)) errors.email = 'Enter a valid email address';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const theme = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormFields, boolean>>>({});
  const [toast, setToast] = useState<{ open: boolean; severity: 'success' | 'error'; message: string }>({
    open: false,
    severity: 'success',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (field: FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const fieldErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleBlur = (field: FormFields) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json() as { success: boolean };
      if (data.success) {
        setToast({ open: true, severity: 'success', message: "Message sent successfully! I'll get back to you soon." });
        setForm({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setToast({ open: true, severity: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch {
      setToast({ open: true, severity: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setSending(false);
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 3,
      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
      '& fieldset': { borderColor: theme.palette.divider },
      '&:hover fieldset': { borderColor: theme.palette.primary.main },
      '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
    },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
              Get In Touch
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}>
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <motion.div variants={staggerItem}>
                <GlassCard>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    Contact Info
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {contactItems.map((item) => (
                      <Box
                        key={item.label}
                        component={item.href ? 'a' : 'div'}
                        href={item.href}
                        target={item.href?.startsWith('http') ? '_blank' : undefined}
                        rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          textDecoration: 'none',
                          color: 'inherit',
                          '&:hover .contact-icon': {
                            bgcolor: `${theme.palette.primary.main}25`,
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        <Box
                          className="contact-icon"
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            bgcolor: `${theme.palette.primary.main}12`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: theme.palette.text.secondary,
                            transition: 'all 0.2s ease',
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {item.label}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {item.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div variants={staggerItem}>
                <GlassCard>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    Send a Message
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          value={form.name}
                          onChange={handleChange('name')}
                          onBlur={handleBlur('name')}
                          error={!!errors.name}
                          helperText={errors.name}
                          size="small"
                          sx={inputSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={form.email}
                          onChange={handleChange('email')}
                          onBlur={handleBlur('email')}
                          error={!!errors.email}
                          helperText={errors.email}
                          size="small"
                          sx={inputSx}
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      fullWidth
                      label="Subject"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      onBlur={handleBlur('subject')}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      size="small"
                      sx={inputSx}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      value={form.message}
                      onChange={handleChange('message')}
                      onBlur={handleBlur('message')}
                      error={!!errors.message}
                      helperText={errors.message}
                      multiline
                      rows={5}
                      sx={inputSx}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={sending}
                      startIcon={sending ? <CircularProgress size={20} color="inherit" /> : <SendRounded />}
                      aria-label="Send contact message"
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                        fontWeight: 600,
                        '&:hover': {
                          boxShadow: '0 6px 30px rgba(99, 102, 241, 0.4)',
                          transform: 'translateY(-1px)',
                        },
                        '&.Mui-disabled': {
                          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                          opacity: 0.7,
                          color: '#fff',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {sending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setToast((prev) => ({ ...prev, open: false }))} severity={toast.severity} variant="filled" sx={{ borderRadius: 3 }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
