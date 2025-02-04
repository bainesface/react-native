import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>what are we going to do?!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={() => console.log('touchy button')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
