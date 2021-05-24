import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { fontSizes, paddingSizes } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

export function FocusHistory({ focusHistory, onClear, restartFocus }) {
  const HistoryItem = ({ item, index }) => {
    return (
      <RoundedButton
        text={item.subject}
        textStyle={styles.historyItemText}
        style={styles.historyItem(item.status)}
        onPress={() => restartFocus(item.subject)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>Tasks in focus</Text>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={styles.flatList}
            data={focusHistory}
            renderItem={HistoryItem}
          />
          <View styles={styles.clearContainer}>
            <RoundedButton text="clear" onPress={() => onClear()} size={75} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingSizes.medium,
    alignItems: 'center',
  },
  title: {
    color: 'grey',
    fontSize: fontSizes.medium,
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5,
    paddingLeft: paddingSizes.large,
    paddingRight: paddingSizes.large,
    paddingBottom: paddingSizes.small,
  },
  flatList: {
    flex: 1,
  },
  historyItem: (status) => ({
    backgroundColor: status ? '#ff6961' : '#cff0cc',
    padding: paddingSizes.small,
    width: 200,
    height: 45,
    borderRadius: 1,
    borderWidth: 0,
    marginVertical: paddingSizes.xsmall,
  }),
  historyItemText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
  clearContainer: {
    borderColor: 'black',
    borderWidth: 5,
  },
});
