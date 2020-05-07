import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{color}</Text>
      <Button title={`Increase ${color}`} />
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
