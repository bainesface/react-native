import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = () => {
  return (
    <View>
      <Text styles={textStyle}>Red</Text>
      <Button title="Increase Red" />
      <Button title="Decrease Red" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
  },
});

export default ColorCounter;
