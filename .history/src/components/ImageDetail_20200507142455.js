import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
      <Button title="score down" onPress={() => console.log('hello')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
