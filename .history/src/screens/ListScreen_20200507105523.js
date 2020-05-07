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
  ];

  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
