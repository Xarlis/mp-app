import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

// import { Container } from './styles';

const Recover = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Elcharne System é o futuro ♥</Text>
    </View>
  );
}

export default Recover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  message: {
    fontWeight: 'bold',
    fontSize: 20
  }
});