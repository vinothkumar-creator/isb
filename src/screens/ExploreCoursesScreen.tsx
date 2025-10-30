// ExploreCoursesScreen
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExploreCourses from '@components/ExploreCourses';
import { useTheme } from '@hooks/useTheme';

const ExploreCoursesScreen: React.FC = () => {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <ExploreCourses />
    </View>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
  });

export default ExploreCoursesScreen;
