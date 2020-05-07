import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(15);
  const [blue, setBlue] = useState(25);
  const [green, setGreen] = useState(40);

  console.log(red, green, blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
