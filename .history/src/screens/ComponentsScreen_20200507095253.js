import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there';
  return <Text style={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
