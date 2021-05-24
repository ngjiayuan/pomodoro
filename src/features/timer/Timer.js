import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { fontSizes, paddingSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

export function Timer({ subject, onTimerEnd, clearSubject }) {
  useKeepAwake();

  const [minutes, setMinutes] = useState(20);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const vibrate = () => {
    Vibration.vibrate(5000);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(minutes);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{subject}</Text>
      </View>
      <View style={styles.countdownContainer}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
        <ProgressBar
          progress={progress}
          color="white"
          style={styles.progressBar}
        />
      </View>
      <View>
        <Timing changeTime={changeTime} task={subject} duration={minutes} />
      </View>
      <View style={styles.button}>
        {isStarted ? (
          <RoundedButton text="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton text="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton text="X" size={50} onPress={() => clearSubject()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingSizes.medium,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: paddingSizes.large,
  },
  title: {
    color: 'grey',
    fontSize: fontSizes.medium,
  },
  task: {
    color: 'grey',
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
  countdownContainer: {
    padding: paddingSizes.medium,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    paddingTop: paddingSizes.large,
  },
  progressBar: {
    height: 10,
  },
  clearSubject: {
    paddingTop: paddingSizes.medium,
    paddingRight: paddingSizes.medium,
    alignItems: 'flex-end',
  },
});
