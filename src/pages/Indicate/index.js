import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'native-base';

// import { Container } from './styles';

const Indicate = () => {
    return (
        <View style={styles.container}>



            <View style={styles.texto}>
                <Icon style={{ color: '#ff4500', fontSize: 120,textAlign:"center",paddingBottom:10 }}
                    type="FontAwesome" name="percent"
                />
                <Text style={styles.messageDesconto}>Indicando e o primeiro serviço
                que o seu indicado contratar, você ganha 10% desconto por nossa conta.
            </Text>
            </View>

            <TouchableOpacity
                style={styles.botaoFacebook}>
                <Text style={styles.botaoTexto}>
                    <Icon style={{ color: '#fff', fontSize: 25 }}
                        type="FontAwesome" name="facebook"
                    />  Indicar no Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoWhatsapp}>
                <Text style={styles.botaoTexto}>
                    <Icon style={{ color: '#fff', fontSize: 25 }}
                        type="FontAwesome" name="whatsapp"
                    />  Indicar no Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoTelegram}>
                <Text style={styles.botaoTexto}>
                    <Icon style={{ color: '#fff', fontSize: 25 }}
                        type="FontAwesome" name="telegram"
                    />  Indicar no Telegram</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Indicate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoFacebook: {
        backgroundColor: '#4169E1',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        marginBottom: 5,
        width: 300,
    },
    botaoWhatsapp: {
        backgroundColor: '#03962a',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        marginBottom: 5,
        width: 300,
    },

    botaoTelegram: {
        backgroundColor: '#04a8d1',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        marginBottom: 5,
        width: 300,
    },
    botaoTexto: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 5,
    },
    texto: {
        top: -80,
        width: 300,
        // backgroundColor: '#f5f5f5'
    },
    messageDesconto: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        // paddingLeft: 20,
        textAlign: "justify",
        color: '#191970'
    }
})