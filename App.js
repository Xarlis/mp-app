import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle, } from '@react-navigation/stack';
import { Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'

import Home from './src/pages/Home';
import Menu from './src/pages/Menu';
import Recover from './src/pages/Recover';
import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cliente"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome name="user" size={25} color={color}
            />
        }}
        style={{ fontSize: 25 }}
      />
      <Tab.Screen
        name="Profissional"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) =>
            <FontAwesome name="briefcase" size={25} color={color} />
        }}
      />
    </Tab.Navigator>
  )
  //briefcase
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Meu Profissional',
          headerStyle: {
            backgroundColor: '#F7941d',
          },
          headerTintColor: '#000'
        }} />
        <Stack.Screen name="Menu" component={Tabs}
          options={{
            title: 'Meu Profissional',
            headerStyle: {
              backgroundColor: '#F7941d',
            },
            headerTintColor: '#000',
            // headerRight: () => (
            //   <TouchableOpacity
            //     // onPress={() => this.state.MenuP.teste()}
            //     style={styles.botao}>
            //     <Text style={styles.botaoTexto}>
            //       <Icon style={styles.icone}
            //         type="FontAwesome" name="bell"
            //       />
            //     </Text>
            //   </TouchableOpacity>
            // ),
          }} />
        <Stack.Screen name="Recover" component={Recover} options={{
          title: 'Recuperar Senha',
          headerStyle: {
            backgroundColor: '#f7941d',
          },
          headerTintColor: '#000',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#DCDCDC',
    height: 32,
    width: 30,
    marginBottom: 5,
    marginTop: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  botaoTexto: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 5,
  },

  icone: {
    color: '#FF4500',
    fontSize: 20,
  },

});

