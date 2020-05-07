import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = <Text style={styles.nameStyle}>Sarah</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.nameTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
  nameTextStyle: {
    fontSize: 20,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});

export default ComponentsScreen;
