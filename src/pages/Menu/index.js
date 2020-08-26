import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Modal,Alert } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Menu = () => {
  // const [modalVisible, setModalVisible] = useState(false);

  const teste = ()=>{
    Alert.alert('Olá Neilson')
  }
  return (

    <View style={styles.container}>

      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="qrcode"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Liberar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="briefcase"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Procurar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="star"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Favoritos</Text>
        </View>
      </TouchableOpacity>



      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="calendar"
          />
        </Text>
        <View>
          <Text style={styles.botaoNome}>Agendados</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="comments"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Mensagens</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="bullhorn"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Indicar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="history"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Histórico</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="credit-card"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Pagamento</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="thumbs-up"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Rede Social</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="phone"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Suporte</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="cog"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Configurações</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => autenticar()}
        style={styles.botao}>
        <Text style={styles.botaoTexto}>
          <Icon style={styles.icone}
            type="FontAwesome" name="info"
          />
        </Text>
        <View style={{ paddingBottom: 4 }}>
          <Text style={styles.botaoNome}>Informações</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  botao: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    height: 95,
    width: 100,
    marginBottom: 5,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 4,
  },
  botaoTexto: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 12,
  },
  botaoNome: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    // paddingTop: 12,
    paddingBottom: 5,
  },
  icone: {
    color: '#C0C0C0',
    fontSize: 50,
  },

});