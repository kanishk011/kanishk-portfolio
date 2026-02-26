import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Container,
  Chip,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import GlassCard from '../common/GlassCard';
import { experiences, education } from '../../data/mockData';
import { staggerContainer, staggerItem } from '../../utils/animations';
import type { ExperienceEntry, EducationEntry } from '../../types';

function TimelineEntry({
  entry,
  type,
  isLast,
}: {
  entry: ExperienceEntry | EducationEntry;
  type: 'experience' | 'education';
  isLast: boolean;
}) {
  const theme = useTheme();
  const isExp = type === 'experience';
  const exp = entry as ExperienceEntry;
  const edu = entry as EducationEntry;

  return (
    <motion.div variants={staggerItem}>
      <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5 }}>
          <Box
            sx={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              bgcolor: theme.palette.primary.main,
              border: `3px solid ${theme.palette.background.default}`,
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
              flexShrink: 0,
              zIndex: 1,
            }}
          />
          {!isLast && <Box sx={{ width: 2, flex: 1, bgcolor: theme.palette.divider, mt: 1 }} />}
        </Box>

        <Box sx={{ flex: 1, pb: 4, minWidth: 0 }}>
          <GlassCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
              <Box>
                <Typography variant="h4">{isExp ? exp.role : edu.degree}</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 600, mt: 0.25 }}>
                  {isExp ? exp.company : edu.institution}
                </Typography>
                {isExp && (
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {exp.location}
                  </Typography>
                )}
              </Box>
              <Chip
                label={isExp ? `${exp.startDate} — ${exp.endDate ?? 'Present'}` : edu.year}
                size="small"
                variant="outlined"
                sx={{ borderColor: theme.palette.divider, fontSize: '0.7rem' }}
              />
            </Box>

            {isExp && (
              <>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1.5 }}>
                  {exp.description}
                </Typography>
                <List dense sx={{ mt: 1, mb: 1 }}>
                  {exp.achievements.map((a) => (
                    <ListItem key={a} sx={{ px: 0, py: 0.25 }}>
                      <ListItemText
                        primary={`• ${a}`}
                        primaryTypographyProps={{ variant: 'body2', color: theme.palette.text.secondary }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {exp.techUsed.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontSize: '0.65rem',
                        height: 22,
                        bgcolor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>
              </>
            )}

            {!isExp && edu.grade && (
              <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                Grade: {edu.grade}
              </Typography>
            )}
            {!isExp && edu.status === 'ongoing' && (
              <Chip label="Currently Pursuing" size="small" color="primary" sx={{ mt: 1, fontSize: '0.65rem', height: 22 }} />
            )}
          </GlassCard>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Experience() {
  const theme = useTheme();

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 22, 41, 0.5)' : 'rgba(241, 245, 249, 0.5)',
      }}
    >
      <Container maxWidth="md">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
              Experience
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}>
              My professional journey and education.
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Work Experience
            </Typography>
          </motion.div>
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.id} entry={exp} type="experience" isLast={i === experiences.length - 1} />
          ))}

          <Box sx={{ mt: 4 }}>
            <motion.div variants={staggerItem}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Education
              </Typography>
            </motion.div>
            {education.map((edu, i) => (
              <TimelineEntry key={edu.id} entry={edu} type="education" isLast={i === education.length - 1} />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
