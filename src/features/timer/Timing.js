import React from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from '../../utils/sizes';

export function Timing({ changeTime, task, duration }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Duration: {duration} min</Text>
      <Slider
        minimumValue={1}
        maximumValue={59}
        minimumTrackTintColor="white"
        maximumTrackTintColor="grey"
        thumbTintColor="white"
        step={1}
        value={duration}
        onValueChange={(value) => changeTime(value)}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <RoundedButton size={75} text="10" onPress={() => changeTime(10)} />
        </View>
        <View style={styles.button}>
          <RoundedButton size={75} text="15" onPress={() => changeTime(15)} />
        </View>
        <View style={styles.button}>
          <RoundedButton size={75} text="20" onPress={() => changeTime(20)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: paddingSizes.medium,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    padding: paddingSizes.medium,
  },
  title: {
    fontSize: fontSizes.medium,
    textAlign: 'center',
    color: 'grey',
  },
});
