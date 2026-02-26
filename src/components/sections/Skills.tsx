import { motion } from 'framer-motion';
import { Box, Typography, Container, Stack, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import GlassCard from '../common/GlassCard';
import { skillCategories } from '../../data/mockData';
import { iconMap } from '../../utils/iconMap';
import { staggerContainer, staggerItem, skillBarFill } from '../../utils/animations';
import type { Skill } from '../../types';

function SkillBar({ skill, color }: { skill: Skill; color: string }) {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {skill.name}
        </Typography>
        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontVariantNumeric: 'tabular-nums' }}>
          {skill.level}%
        </Typography>
      </Box>
      <Box sx={{ height: 8, borderRadius: 1, bgcolor: theme.palette.action.hover, overflow: 'hidden' }}>
        <motion.div
          variants={skillBarFill(skill.level)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}CC)` }}
        />
      </Box>
    </Box>
  );
}

export default function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 14 }, bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 22, 41, 0.5)' : 'rgba(241, 245, 249, 0.5)' }}>
      <Container maxWidth="lg">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
              Skills & Expertise
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}>
              Technical proficiency across the full stack.
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <Grid item xs={12} md={6} key={cat.id}>
                  <motion.div variants={staggerItem}>
                    <GlassCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            bgcolor: `${cat.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {Icon && <Icon sx={{ color: cat.color, fontSize: 22 }} />}
                        </Box>
                        <Typography variant="h4">{cat.title}</Typography>
                      </Box>
                      <Stack spacing={2}>
                        {cat.skills.map((skill) => (
                          <SkillBar key={skill.name} skill={skill} color={cat.color} />
                        ))}
                      </Stack>
                    </GlassCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
