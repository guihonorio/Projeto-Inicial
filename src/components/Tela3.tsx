import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Tela3() {
  return (
    <View style={styles.container}>

      <View style={styles.parteSuperior}>
        <Text style={styles.titulo}>BEM-VINDO</Text>
        <Text>FULANO</Text>
      </View>

      <View style={styles.parteCentral}>
        <Pressable
          style={styles.botao}
          onPress={() => Alert.alert('Comprar')}
        >
          <Text>COMPRAR</Text>
        </Pressable>
      </View>

      <View style={styles.parteInferior}>
        <Pressable
          style={styles.botao}
          onPress={() => Alert.alert('Sair')}
        >
          <Text>SAIR</Text>
        </Pressable>
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
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
  },

  parteCentral: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  parteInferior: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  botao: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
  },
});