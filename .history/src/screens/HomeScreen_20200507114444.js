import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>what are we going to do?!</Text>
      <Button title="Tap me" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
