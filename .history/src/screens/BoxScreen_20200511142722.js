import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
    height: 200,
    borderWidth: 3,
    borderColor: 'black',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4,
    alignSelf: 'center',
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 2,
    alignSelf: 'flex-start',
  },
});

export default BoxScreen;
