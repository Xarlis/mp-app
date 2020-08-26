import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Menu = () => {
  const teste = () => {
    Alert.alert('Olá Neilson')
  }
  return (

    <View style={styles.container}>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botaoConta}>
        <Text style={{ color: '#fff', fontSize: 20, paddingTop: 6, fontWeight: 'bold' }}>
          Criar conta profissional&nbsp;&nbsp;
          <Icon style={{ color: '#fff', fontSize: 20, }}
            type="FontAwesome" name="arrow-right"
          ></Icon>
        </Text>

      </TouchableOpacity>
    </View>

  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoConta: {
    backgroundColor: '#964b00',
    borderRadius: 5,
    borderWidth: 1,
    color: '#000',
    height: 45,
    width: 300,
    marginBottom: 5,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 4,
  },
});