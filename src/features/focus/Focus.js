import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from '../../utils/sizes';

export function Focus({ addSubject }) {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What's your next task?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
            placeholder='e.g. study'
          />
          <RoundedButton
            text="Add Task"
            size={50}
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    padding: paddingSizes.medium,
  },
  titleContainer: {
    flex: 0.6,
    justifyContent: 'center',
    paddingTop: paddingSizes.xlarge,
  },
  title: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: fontSizes.medium,
  },
  inputContainer: {
    paddingTop: paddingSizes.small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: paddingSizes.small,
    backgroundColor: '#e4f4ff',
  },
});
