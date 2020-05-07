import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Ben', key: '1' },
    { name: 'Sarah', key: '2' },
    { name: 'Kelly', key: '3' },
    { name: 'Hannah', key: '4' },
    { name: 'Paul', key: '5' },
    { name: 'Fran', key: '6' },
    { name: 'Merida', key: '7' },
    { name: 'Sam', key: '8' },
    { name: 'Gerry', key: '9' },
    { name: 'Phill', key: '10' },
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
