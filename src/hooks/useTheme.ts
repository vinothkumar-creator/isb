// Custom hook for theme management
import { useColorScheme } from 'react-native';
import { Colors, ThemeColors, ColorScheme } from '@constants/theme';

export const useTheme = () => {
  const systemColorScheme = useColorScheme();
  const colorScheme: ColorScheme = systemColorScheme === 'dark' ? 'dark' : 'light';
  const colors: ThemeColors = Colors[colorScheme];
  const isDark = colorScheme === 'dark';

  return {
    colors,
    colorScheme,
    isDark,
  };
};

