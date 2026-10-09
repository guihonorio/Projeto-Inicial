import { StyleSheet, Text, View } from 'react-native';

export default function Tela2() {
  return (
    <View style={styles.container}>

      <View style={styles.parteSuperior}>
        <Text style={styles.texto}>PRIMEIRO</Text>
        <Text style={styles.texto}>SEGUNDO</Text>
        <Text style={styles.texto}>TERCEIRO</Text>
      </View>

      <View style={styles.parteInferior}>
        <Text style={styles.numero}>1</Text>
        <Text style={styles.numero}>2</Text>
        <Text style={styles.numero}>3</Text>
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
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },

  texto: {
    fontSize: 22,
  },

  parteInferior: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  numero: {
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});