import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={require(imageSource)} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
