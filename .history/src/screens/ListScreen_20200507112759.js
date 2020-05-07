import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Ben' },
    { name: 'Sarah' },
    { name: 'Kelly' },
    { name: 'Hannah' },
    { name: 'Paul' },
    { name: 'Fran' },
    { name: 'Merida' },
    { name: 'Sam' },
    { name: 'Gerry' },
    { name: 'Phill' },
    { name: 'Becky' },
    { name: 'Chris' },
    { name: 'Sophie' },
  ];

  return (
    <FlatList
      horizontal
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
