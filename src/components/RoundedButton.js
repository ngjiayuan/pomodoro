import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function RoundedButton({
  style = {},
  textStyle = {},
  size = 100,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'grey',
      borderWidth: 1.5,
    },
    text: {
      color: 'grey',
      fontSize: size / 4,
      textAlign: 'center',
    },
  });
