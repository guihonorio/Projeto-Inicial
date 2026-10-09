import { StyleSheet, Text, View } from 'react-native';

export default function Tela1() {
  return (
    <View style={styles.container}>

      <View style={styles.parteSuperior}>
        <View style={styles.numeros}>
          <Text style={[styles.numero, styles.preto]}>1</Text>
          <Text style={[styles.numero, styles.branco]}>2</Text>
          <Text style={[styles.numero, styles.azul]}>3</Text>
        </View>
      </View>

      <View style={styles.parteInferior}>
        <Text style={styles.hello}>HELLO{'\n'}WORLD</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
  },

  parteSuperior: {
    flex: 1,
    alignItems: 'flex-end',
  },

  numeros: {
    flexDirection: 'row-reverse',
  },

  numero: {
    borderWidth: 1,
    padding: 10,
    margin: 3,
  },

  preto: {
    backgroundColor: 'black',
    color: 'white',
  },

  branco: {
    backgroundColor: 'white',
    color: 'black',
  },

  azul: {
    backgroundColor: 'blue',
    color: 'white',
  },

  parteInferior: {
    flex: 1,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  hello: {
    fontSize: 30,
    textAlign: 'center',
  },                                                                                                      
});