import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import LightModeRounded from '@mui/icons-material/LightModeRounded';
import DarkModeRounded from '@mui/icons-material/DarkModeRounded';
import { useThemeMode } from '../hooks/useThemeMode';
import { NAV_ITEMS } from '../utils/constants';

export default function Navbar() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="nav"
        sx={{
          bgcolor: trigger
            ? theme.palette.mode === 'dark'
              ? 'rgba(10, 14, 26, 0.85)'
              : 'rgba(248, 250, 252, 0.85)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(12px)' : 'none',
          borderBottom: trigger ? `1px solid ${theme.palette.divider}` : 'none',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => scrollTo('#hero')}
          >
            Kanishk M
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.5, mr: 1 }}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Box
                    key={item.href}
                    component="button"
                    onClick={() => scrollTo(item.href)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                      fontWeight: isActive ? 600 : 400,
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: theme.palette.primary.main },
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '20%',
                          right: '20%',
                          height: 2,
                          borderRadius: 1,
                          background: theme.palette.primary.main,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          <IconButton onClick={toggleTheme} aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} sx={{ color: theme.palette.text.secondary }}>
            {mode === 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
          </IconButton>

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="Open navigation menu" sx={{ color: theme.palette.text.primary, ml: 0.5 }}>
              <MenuRounded />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <AnimatePresence>
        {isMobile && (
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: 280,
                bgcolor: theme.palette.background.paper,
                pt: 2,
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
              <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close navigation menu">
                <CloseRounded />
              </IconButton>
            </Box>
            <List sx={{ px: 1 }}>
              {NAV_ITEMS.map((item) => (
                <ListItemButton
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    bgcolor:
                      activeSection === item.href.replace('#', '')
                        ? `${theme.palette.primary.main}15`
                        : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: activeSection === item.href.replace('#', '') ? 600 : 400,
                      color:
                        activeSection === item.href.replace('#', '')
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
