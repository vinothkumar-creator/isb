// CourseCard component
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useTheme } from '@hooks/useTheme';

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  level: string;
  onPress?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  duration,
  level,
  onPress,
}) => {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{level}</Text>
        </View>
      </View>
      <Text style={styles.instructor}>By {instructor}</Text>
      <View style={styles.footer}>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      ...Platform.select({
        web: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
        default: {
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
      }),
      borderWidth: 1,
      borderColor: colors.border,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text,
      flex: 1,
      marginRight: 8,
    },
    levelBadge: {
      backgroundColor: colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    levelText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '500',
    },
    instructor: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 12,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    duration: {
      fontSize: 13,
      color: colors.textTertiary,
    },
  });

export default CourseCard;
