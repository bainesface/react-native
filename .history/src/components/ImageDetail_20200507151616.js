import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={styles.landscape}>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  landscape: {
    textAlign: 'cneter',
  },
});

export default ImageDetail;
