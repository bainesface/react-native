import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
  },
  boxOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  boxTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
  boxThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
  },
});

export default LayoutScreen;
