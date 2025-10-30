// ExploreCourses component
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import CourseCard from './CourseCard';
import { useTheme } from '@hooks/useTheme';
import { Spacing } from '@constants/theme';

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
}

const ExploreCourses: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { colors } = useTheme();

  const styles = createStyles(colors);

  // Sample courses data - In production, this would come from a service/hook
  const allCourses: Course[] = [
    {
      id: '1',
      title: 'Introduction to React Native',
      instructor: 'John Doe',
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      id: '2',
      title: 'Advanced JavaScript Concepts',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Intermediate',
    },
    {
      id: '3',
      title: 'Mobile App Development',
      instructor: 'Mike Johnson',
      duration: '10 weeks',
      level: 'Advanced',
    },
    {
      id: '4',
      title: 'UI/UX Design Fundamentals',
      instructor: 'Sarah Williams',
      duration: '5 weeks',
      level: 'Beginner',
    },
    {
      id: '5',
      title: 'Data Structures & Algorithms',
      instructor: 'David Brown',
      duration: '12 weeks',
      level: 'Intermediate',
    },
    {
      id: '6',
      title: 'Cloud Computing Basics',
      instructor: 'Emily Davis',
      duration: '7 weeks',
      level: 'Intermediate',
    },
  ];

  const filteredCourses = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Courses</Text>
        <Text style={styles.headerSubtitle}>
          Discover your next learning journey
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses or instructors..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={colors.textTertiary}
        />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              level={course.level}
              onPress={() => {
                console.log('Course selected:', course.title);
              }}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No courses found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    header: {
      paddingHorizontal: Spacing.md,
      paddingTop: Spacing.md,
      paddingBottom: Spacing.sm,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    searchContainer: {
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    searchInput: {
      backgroundColor: colors.surface,
      borderRadius: 8,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      fontSize: 16,
      color: colors.text,
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: Spacing.md,
      paddingTop: Spacing.md,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 40,
    },
    emptyText: {
      fontSize: 16,
      color: colors.textTertiary,
    },
  });

export default ExploreCourses;
