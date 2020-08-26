
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native';
import { Icon} from 'native-base';

import styles from '../../css/home';
import api from '../../services/api';
import { color } from 'react-native-reanimated';


const Home = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    autenticar = async () => {
        const response = await api.post('/users/login', {
            'email': email,
            'senha': senha
        });

        if (response.data.authorization == 'true') {
            navigation.navigate("Menu")
        } else if (response.data.authorization == 'false') {
            // navigation.navigate('MenuP')
            Alert.alert(response.data.message)
        }
    }

    return (

        <KeyboardAvoidingView style={styles.container} >
            <View style={{ top: -60 }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../public/img/logo.png')}
                />
            </View>

            <View>
                <Text style={styles.tituloCampo}>Email:</Text>
                <TextInput
                    style={styles.campo}
                    onChangeText={email => setEmail(email)}
                    value={email}
                    placeholder='example@example.com'
                ></TextInput>

                <Text style={styles.tituloCampo}>Senha:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.campo}
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                    placeholder='senha'
                    >
                </TextInput>

                <TouchableOpacity
                    onPress={() => autenticar()}
                    style={styles.botao}>
                    <Text style={styles.botaoTexto}>
                        <Icon style={{ color: '#fff', fontSize: 20 }}
                            type="FontAwesome" name="sign-in"
                        />  Entrar
                    </Text>
                </TouchableOpacity>

                {/* Fazer login com o Facebook */}
                {/* <TouchableOpacity
                    style={styles.botaoFacebook}>
                    <Text style={styles.botaoTexto}>
                        <Icon style={{ color: '#fff', fontSize: 20 }}
                            type="FontAwesome" name="facebook"
                        />  Login com Facebook</Text>
                </TouchableOpacity> */}

                {/* Fazer login com Google */}
                {/* <TouchableOpacity
                    style={styles.botaoGoogle}>
                    <Text style={styles.botaoTexto}>
                        <Icon style={{ color: '#fff', fontSize: 20 }}
                            type="FontAwesome" name="google"
                        />  Login com Google</Text>
                </TouchableOpacity> */}

                {/* Recuper senha */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Recover')}
                    style={styles.botaoRecover}>
                    <Text style={styles.botaoTextoRecover}>
                        <Icon style={{ color: '#964b00', fontSize: 20 }}
                            type="FontAwesome" name="key"
                        />  Recuperar senha</Text>
                </TouchableOpacity>
            </View>
            {/* <View>{this.list()}</View> */}
        </KeyboardAvoidingView >
    );
}

export default Home;

