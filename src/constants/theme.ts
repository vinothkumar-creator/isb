// Theme constants for light and dark mode

export const Colors = {
  light: {
    primary: '#4a90e2',
    secondary: '#7b68ee',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#1a1a1a',
    textSecondary: '#666666',
    textTertiary: '#999999',
    border: '#e0e0e0',
    error: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    card: '#ffffff',
    shadow: '#000000',
  },
  dark: {
    primary: '#5a9ef0',
    secondary: '#8b78fe',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    textTertiary: '#888888',
    border: '#333333',
    error: '#ff5252',
    success: '#4caf50',
    warning: '#ffa726',
    card: '#1e1e1e',
    shadow: '#000000',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 28,
    xxxl: 32,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 999,
};

export type ThemeColors = typeof Colors.light;
export type ColorScheme = 'light' | 'dark';

