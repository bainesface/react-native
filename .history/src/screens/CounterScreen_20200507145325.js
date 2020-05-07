import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  return (
    <View>
      <Button title="increase" />
      <Button title="decrease" />
      <Text>Current Count</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
