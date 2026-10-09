import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* TELA 1 */}
      <Text style={styles.tituloTela}>Tela 1</Text>

      <View style={styles.tela}>
        <View style={styles.metadeSuperior}>
          <View style={styles.numerosHorizontal}>
          <Text style={[styles.numero, styles.preto]}>1</Text>
          <Text style={[styles.numero, styles.branco]}>2</Text>
          <Text style={[styles.numero, styles.azul]}>3</Text>
        </View>
        </View>

        <View style={styles.metadeInferior}>
          <Text style={styles.hello}>HELLO{'\n'}WORLD</Text>
        </View>
      </View>

      {/* TELA 2 */}
      <Text style={styles.tituloTela}>Tela 2</Text>

      <View style={styles.tela}>
        <View style={styles.textosVerticais}>
          <Text style={styles.texto}>PRIMEIRO</Text>
          <Text style={styles.texto}>SEGUNDO</Text>
          <Text style={styles.texto}>TERCEIRO</Text>
        </View>

        <View style={styles.numerosVerticais}>
          <Text style={styles.numero}>1</Text>
          <Text style={styles.numero}>2</Text>
          <Text style={styles.numero}>3</Text>
        </View>
      </View>

      {/* TELA 3 */}
      <Text style={styles.tituloTela}>Tela 3</Text>

      <View style={styles.tela}>
        <View style={styles.boasVindas}>
          <Text style={styles.titulo}>BEM-VINDO</Text>
          <Text style={styles.texto}>FULANO</Text>
        </View>

        <View style={styles.parteCentral}>
          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Comprar')}
          >
            <Text>COMPRAR</Text>
          </Pressable>
        </View>

        <View style={styles.parteSair}>
          <Pressable
            style={styles.botao}
            onPress={() => Alert.alert('Sair')}
          >
            <Text>SAIR</Text>
          </Pressable>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
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

  container: {
    padding: 15,
    gap: 15,
  },

  tituloTela: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  tela: {
    height: 550,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },

  metadeSuperior: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: '',
  },

  numerosHorizontal: {
    flexDirection: 'row-reverse',
  },

  numero: {
    borderWidth: 1,
    padding: 10,
    margin: 3,
    fontSize: 20,
  },

  metadeInferior: {
    flex: 1,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a75f1',
  },

  hello: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },

  textosVerticais: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 10,
  },

  numerosVerticais: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  texto: {
    fontSize: 20,
  },

  boasVindas: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  titulo: {
    fontSize: 26,
  },

  parteCentral: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  parteSair: {
    alignItems: 'center',
    padding: 10,
  },

  botao: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
  },
});