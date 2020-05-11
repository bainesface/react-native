import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState({ currentText: '' });
  const { currentText } = text;

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value="hi there"
        onChangeText={() => {
          setText({ currentText: value });
        }}
      />
     
    </View> <Text>{currentText}</Text>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
