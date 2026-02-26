import { createTheme } from '@mui/material/styles';
import type { ThemeMode } from '../types';
import { darkPalette, lightPalette } from './palette';

export const getTheme = (mode: ThemeMode) => {
  const p = mode === 'dark' ? darkPalette : lightPalette;

  return createTheme({
    palette: {
      mode,
      primary: { main: p.primary, light: p.primaryLight, dark: p.primaryDark },
      secondary: { main: '#8B5CF6' },
      success: { main: p.success },
      warning: { main: p.warning },
      error: { main: p.error },
      info: { main: p.info },
      background: { default: p.bgPrimary, paper: p.bgSecondary },
      text: { primary: p.textPrimary, secondary: p.textSecondary },
      divider: p.border,
    },
    typography: {
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.2, letterSpacing: '-0.02em' },
      h2: { fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.3, letterSpacing: '-0.01em' },
      h3: { fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.4 },
      h4: { fontWeight: 600, fontSize: '1.125rem' },
      h5: { fontWeight: 600, fontSize: '1rem' },
      h6: { fontWeight: 600, fontSize: '0.875rem' },
      body1: { fontSize: '0.9375rem', lineHeight: 1.6 },
      body2: { fontSize: '0.8125rem', lineHeight: 1.5 },
      caption: { fontSize: '0.75rem' },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    spacing: 8,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: p.bgPrimary,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: p.glassBackground,
            backdropFilter: `blur(${p.glassBlur})`,
            border: `1px solid ${p.glassBorder}`,
            borderRadius: 16,
            boxShadow: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '8px 20px',
            fontWeight: 600,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
            fontSize: '0.75rem',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: p.glassBackground,
            backdropFilter: `blur(${p.glassBlur})`,
            borderBottom: `1px solid ${p.glassBorder}`,
            boxShadow: 'none',
          },
        },
      },
    },
  });
};
