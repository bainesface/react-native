import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red: number, blue: number, green: number}
  //action === {type: 'change_red'||'change_green'||'change_blue, payload: 15 || -15}

  switch (action.colorToChange) {
    case 'red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case 'green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
