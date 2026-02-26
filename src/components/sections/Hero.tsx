import { motion } from 'framer-motion';
import { Box, Typography, Button, useTheme } from '@mui/material';
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded';
import DownloadRounded from '@mui/icons-material/DownloadRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resumePdf from '../../assets/kanishk_resume.pdf';
import { profileInfo } from '../../data/mockData';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function Hero() {
  const theme = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            theme.palette.mode === 'dark'
              ? 'radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)'
              : 'radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.04) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <Box sx={{ maxWidth: 720, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div variants={staggerItem}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                borderRadius: 6,
                bgcolor: `${theme.palette.primary.main}12`,
                border: `1px solid ${theme.palette.primary.main}25`,
                mb: 3,
              }}
            >
              <Box
                className="pulse-dot"
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#10B981',
                }}
              />
              <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                Available for opportunities
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: '-0.03em',
              }}
            >
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {profileInfo.name}
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
                mb: 4,
                maxWidth: 560,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {profileInfo.tagline}
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollTo('contact')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 30px rgba(99, 102, 241, 0.4)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollTo('experience')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    bgcolor: `${theme.palette.primary.main}08`,
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                My Experience
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={resumePdf}
                download="Kanishk_M_Resume.pdf"
                startIcon={<DownloadRounded />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: '#10B981',
                    bgcolor: 'rgba(16, 185, 129, 0.08)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Resume
              </Button>
            </Box>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <Button
                href={profileInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                sx={{
                  minWidth: 44,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': { color: theme.palette.text.primary, borderColor: theme.palette.text.primary },
                }}
              >
                <GitHubIcon fontSize="small" />
              </Button>
              <Button
                href={profileInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                sx={{
                  minWidth: 44,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': { color: '#0A66C2', borderColor: '#0A66C2' },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </Button>
            </Box>
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
      >
        <Box
          component="button"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About section"
          sx={{
            background: 'none',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 6,
            p: 1,
            cursor: 'pointer',
            color: theme.palette.text.secondary,
            display: 'flex',
            '&:hover': { borderColor: theme.palette.primary.main, color: theme.palette.primary.main },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowDownwardRounded fontSize="small" />
        </Box>
      </motion.div>
    </Box>
  );
}
