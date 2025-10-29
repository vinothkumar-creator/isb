/**
 * ISB Educational Platform
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ExploreCourses from './components/ExploreCourses';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ExploreCourses />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
