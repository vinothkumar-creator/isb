// Formatting utilities

/**
 * Format duration string
 */
export const formatDuration = (duration: string): string => {
  return duration;
};

/**
 * Format instructor name
 */
export const formatInstructor = (instructor: string): string => {
  return `By ${instructor}`;
};

/**
 * Capitalize first letter
 */
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncate text with ellipsis
 */
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

