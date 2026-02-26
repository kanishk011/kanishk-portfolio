import { Box, Typography, Container, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRounded from '@mui/icons-material/EmailRounded';
import { profileInfo } from '../../data/mockData';

export default function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            &copy; {year} {profileInfo.name}. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton
              href={profileInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label="GitHub"
              sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={profileInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label="LinkedIn"
              sx={{ color: theme.palette.text.secondary, '&:hover': { color: '#0A66C2' } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={`mailto:${profileInfo.email}`}
              size="small"
              aria-label="Send email"
              sx={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.primary.main } }}
            >
              <EmailRounded fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
