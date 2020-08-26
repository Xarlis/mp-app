import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7941d',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    titulo: {
        marginTop: 50,
        marginBottom: 15,
        fontSize: 40,
        fontWeight: 'bold'
    },
    tituloCampo: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '500',
        color: '#000',
        fontWeight: 'bold'
    },
    tituloRecuperarSenha: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        color: 'blue',
        fontWeight: 'bold',
        backgroundColor: '#FFD700'
    },
    campo: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#000',
        marginTop: 4,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    botao: {
        backgroundColor: '#4c4d4e',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 45,
        marginBottom: 5,
        marginTop: 10
    },
    botaoFacebook: {
        backgroundColor: '#4169E1',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        marginBottom: 5
    },
    botaoGoogle: {
        backgroundColor: '#ff0f00',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        marginBottom: 5
    },
    botaoRecover: {
        //#ffd700
        backgroundColor: '#f7941d',
        borderRadius: 5,
        height: 40,
        marginBottom: 5
    },
    botaoTexto: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 12,
    },

    botaoTextoRecover: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#964b00',
        paddingTop: 8,
    },
    botaoTextoEntrar: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 4,
    },
    tinyLogo: {
        borderRadius: 20,
        height: 215,
        width: 300
    }
});

export default styles;