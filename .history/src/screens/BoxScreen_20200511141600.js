import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
    height: 200,
    borderWidth: 3,
    borderColor: 'black',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
