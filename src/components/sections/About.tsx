import { motion } from 'framer-motion';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { profileInfo, stats } from '../../data/mockData';
import AnimatedCounter from '../common/AnimatedCounter';
import GlassCard from '../common/GlassCard';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function About() {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={staggerItem}>
            <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
              About Me
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}
            >
              A quick overview of who I am and what I bring to the table.
            </Typography>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 700,
                mx: 'auto',
                textAlign: 'center',
                mb: 6,
                lineHeight: 1.8,
                fontSize: '1rem',
              }}
            >
              {profileInfo.bio}
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {stats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div variants={staggerItem}>
                  <GlassCard>
                    <Box sx={{ textAlign: 'center' }}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, mt: 0.5, fontWeight: 500, fontSize: '0.8rem' }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </GlassCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
