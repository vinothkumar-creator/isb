// Custom hook for theme management
import { useColorScheme, Platform } from 'react-native';
import { Colors, ThemeColors, ColorScheme } from '@constants/theme';

export const useTheme = () => {
  const systemColorScheme = useColorScheme();
  // Force light mode on web
  const colorScheme: ColorScheme = Platform.OS === 'web' ? 'light' : (systemColorScheme === 'dark' ? 'dark' : 'light');
  const colors: ThemeColors = Colors[colorScheme];
  const isDark = colorScheme === 'dark';

  return {
    colors,
    colorScheme,
    isDark,
  };
};

