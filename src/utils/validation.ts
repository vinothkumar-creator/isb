// Validation utilities

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate if string is not empty
 */
export const isNotEmpty = (str: string): boolean => {
  return str.trim().length > 0;
};

/**
 * Validate if string has minimum length
 */
export const hasMinLength = (str: string, minLength: number): boolean => {
  return str.length >= minLength;
};

