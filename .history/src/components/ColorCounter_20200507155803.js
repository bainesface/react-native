import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = () => {
  return (
    <View>
      <Text>Red</Text>
      <Button title="Increase Red" />
      <Button title="Decrease Red" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
