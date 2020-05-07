import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Ben', age: 36 },
    { name: 'Sarah', age: 28 },
    { name: 'Kelly', age: 34 },
    { name: 'Hannah', age: 30 },
    { name: 'Paul', age: 33 },
    { name: 'Fran', age: 34 },
    { name: 'Merida', age: 29 },
    { name: 'Sam', age: 33 },
    { name: 'Gerry', age: 42 },
    { name: 'Phill', age: 39 },
    { name: 'Becky', age: 45 },
    { name: 'Chris', age: 33 },
    { name: 'Sophie', age: 30 },
  ];

  return (
    <FlatList
      // horizontal={false}
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    padding: 10,
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default ListScreen;
