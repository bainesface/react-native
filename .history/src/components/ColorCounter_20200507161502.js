import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{color}</Text>
      <Button onPress={onIncrease} title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
  },
});

export default ColorCounter;
