// AboutScreen
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@hooks/useTheme';
import { Spacing, Typography } from '@constants/theme';

const AboutScreen: React.FC = () => {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>About ISB</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          ISB is a leading educational platform dedicated to providing
          high-quality courses and training programs. We empower learners to
          achieve their professional goals through comprehensive,
          industry-relevant education.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Offer</Text>
        <Text style={styles.paragraph}>
          • Comprehensive course library covering various domains{'\n'}• Expert
          instructors with industry experience{'\n'}• Flexible learning
          schedules{'\n'}• Hands-on projects and real-world applications{'\n'}•
          Certificate upon course completion
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technology Stack</Text>
        <Text style={styles.paragraph}>
          Built with React Native, this application demonstrates a modern,
          scalable architecture using MVVM (Model-View-ViewModel) pattern,
          ensuring maintainability and code reusability across Android, iOS, and
          Web platforms.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 ISB Educational Platform. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    content: {
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
    paragraph: {
      fontSize: Typography.fontSize.md,
      color: colors.textSecondary,
      lineHeight: 24,
    },
    footer: {
      paddingHorizontal: Spacing.md,
      paddingTop: Spacing.xl,
      paddingBottom: Spacing.lg,
      alignItems: 'center',
    },
    footerText: {
      fontSize: Typography.fontSize.sm,
      color: colors.textTertiary,
    },
  });

export default AboutScreen;
