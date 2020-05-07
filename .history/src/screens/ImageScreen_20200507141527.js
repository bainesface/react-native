import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource="../../assets/forest.jpg" />
      <ImageDetail title="Beach" imageSource="../../assets/beach.jpg" />
      <ImageDetail title="Mountain" imageSource="../../assets/mountain.jpg" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
