// ISB Educational Platform - Main App Component

import React from 'react';
import {
  StatusBar,
  useColorScheme,
  Platform,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from '@navigation';
import { AppProvider } from '@store/useAppStore';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Something went wrong</Text>
          <Text style={styles.errorText}>
            {this.state.error?.message || 'Unknown error'}
          </Text>
          <Text style={styles.errorDetails}>
            Check the browser console for more details
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const AppContent = () => (
    <ErrorBoundary>
      <SafeAreaProvider>
        <AppProvider>
          {Platform.OS !== 'web' && (
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={isDarkMode ? '#121212' : '#ffffff'}
            />
          )}
          <AppNavigator />
        </AppProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );

  if (Platform.OS === 'web') {
    return <AppContent />;
  }

  const { GestureHandlerRootView } = require('react-native-gesture-handler');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContent />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#e74c3c',
  },
  errorText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 8,
  },
  errorDetails: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
  },
});

export default App;
