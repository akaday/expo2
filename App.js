import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatGPT from './ChatGPT';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatGPT />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
