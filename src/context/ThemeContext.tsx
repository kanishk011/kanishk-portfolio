import { createContext, useState, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { ThemeMode } from '../types';
import { getTheme } from '../theme/theme';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme-mode');
    return (stored === 'light' || stored === 'dark') ? stored : 'dark';
  });

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme-mode', next);
      return next;
    });
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const value = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
