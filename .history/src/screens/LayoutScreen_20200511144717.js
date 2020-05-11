import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={{ height: 100, width: 100, backgroundColor: 'green' }} />
      <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
      <View style={{ height: 100, width: 100, backgroundColor: 'yellow' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default LayoutScreen;
