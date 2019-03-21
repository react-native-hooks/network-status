import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useNetworkStatus from '@rnhooks/network-status';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  type: {
    margin: 20,
    fontSize: 20,
  },
});

function App() {
  const { type, effectiveType } = useNetworkStatus();

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Type: ${type}`}</Text>
      <Text style={styles.effectiveType}>{`Effective Type: ${effectiveType}`}</Text>
    </View>
  );
}

export default App;
