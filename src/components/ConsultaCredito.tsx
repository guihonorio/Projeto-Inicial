import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';

export default function ConsultaCredito() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [renda, setRenda] = useState('');
  const [clt, setClt] = useState(false);
  const [divida, setDivida] = useState(false);

  const consultarCredito = () => {

    if (nome === '' || idade === '' || renda === '') {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    const idadeNumero = Number(idade);
    const rendaNumero = Number(renda);

    if (!(idadeNumero > 0) || !(rendaNumero > 0)) {
      Alert.alert('Atenção', 'Informe uma idade e renda válidas!');
      return;
    }

    if (divida === true) {
      Alert.alert(
        'CRÉDITO NEGADO',
        'O correntista não possui direito a crédito, pois possui dívida.'
      );
      return;
    }

    let percentual = 0;

    if (idadeNumero <= 24) {
      percentual = 25;
    } else if (idadeNumero <= 49) {
      percentual = 40;
    } else if (idadeNumero <= 64) {
      percentual = 30;
    } else {
      percentual = 15;
    }

    if (clt === false) {
      percentual = percentual / 2;
    }

    const credito = rendaNumero * percentual / 100;

    Alert.alert(
      'CRÉDITO APROVADO',
      'Correntista: ' + nome +
      '\nPercentual: ' + percentual + '%' +
      '\nValor máximo: R$ ' + credito.toFixed(2)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        CONSULTA DE CRÉDITO
      </Text>

      <Image
        source={{
          uri: 'https://gsobmidia.com.br/uploads/lojas/1712/caixa_1616070029.jpg'
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Nome do correntista:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Idade:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <Text style={styles.label}>Renda anual (R$):</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 20000"
        keyboardType="numeric"
        value={renda}
        onChangeText={setRenda}
      />

      <View style={styles.linha}>
        <Text style={styles.textoSwitch}>
          Possui vínculo CLT?
        </Text>

        <Switch
          value={clt}
          onValueChange={setClt}
        />
      </View>

      <View style={styles.linha}>
        <Text style={styles.textoSwitch}>
          Possui dívida?
        </Text>

        <Switch
          value={divida}
          onValueChange={setDivida}
        />
      </View>

      <Pressable
        style={styles.botao}
        onPress={consultarCredito}
      >
        <Text style={styles.textoBotao}>
          CONSULTAR CRÉDITO
        </Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#005CA9',
    marginTop: 25,
    marginBottom: 10,
  },

  logo: {
    width: 200,
    height: 90,
    alignSelf: 'center',
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  textoSwitch: {
    fontSize: 18,
  },

  botao: {
    backgroundColor: '#005CA9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },

  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});