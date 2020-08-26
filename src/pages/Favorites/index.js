import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import styles from '../../css/home';

// import { Container } from './styles';

const Favorites = () => {
    return (
        <View>
            <Text style={styles.messageInitial}>Sua lista de favoritos está vazia</Text>
        </View>
    );
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageInitial: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop:10,
        paddingLeft:20
    }
})