// HomeScreen
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '@hooks/useTheme';
import { Spacing, Typography } from '@constants/theme';
import { CourseCard } from '@components';
import type { RootStackParamList } from '@navigation/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to ISB</Text>
          <Text style={styles.subtitle}>
            Your educational platform for professional growth
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('ExploreCourses')}
          >
            <Text style={styles.actionButtonText}>Explore Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonSecondary]}
            onPress={() => navigation.navigate('About')}
          >
            <Text
              style={[
                styles.actionButtonText,
                styles.actionButtonTextSecondary,
              ]}
            >
              About Us
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Course</Text>
          <CourseCard
            title="React Native Mastery"
            instructor="Expert Team"
            duration="10 weeks"
            level="Advanced"
            onPress={() => console.log('Featured course pressed')}
          />
        </View>
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
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: Spacing.xl,
    },
    header: {
      paddingHorizontal: Spacing.md,
      paddingTop: Spacing.xl,
      paddingBottom: Spacing.lg,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: Typography.fontSize.xxxl,
      fontWeight: Typography.fontWeight.bold,
      color: colors.text,
      marginBottom: Spacing.xs,
    },
    subtitle: {
      fontSize: Typography.fontSize.md,
      color: colors.textSecondary,
      marginTop: Spacing.xs,
    },
    section: {
      paddingHorizontal: Spacing.md,
      marginTop: Spacing.lg,
    },
    sectionTitle: {
      fontSize: Typography.fontSize.xl,
      fontWeight: Typography.fontWeight.semibold,
      color: colors.text,
      marginBottom: Spacing.md,
    },
    actionButton: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      paddingVertical: Spacing.md,
      paddingHorizontal: Spacing.lg,
      marginBottom: Spacing.md,
      alignItems: 'center',
    },
    actionButtonSecondary: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primary,
    },
    actionButtonText: {
      fontSize: Typography.fontSize.md,
      fontWeight: Typography.fontWeight.semibold,
      color: '#ffffff',
    },
    actionButtonTextSecondary: {
      color: colors.primary,
    },
  });

export default HomeScreen;
