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
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
        color="Green"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
