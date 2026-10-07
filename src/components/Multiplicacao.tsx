import { StyleSheet, Text, View } from 'react-native';

type MultiplicacaoProps = {
  valor1: number;
  valor2: number;
  valor3: number;
};

export default function Multiplicacao({
  valor1,
  valor2,
  valor3,
}: MultiplicacaoProps) {
  const resultado = valor1 * valor2 * valor3;

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Valor 1: {valor1}</Text>
      <Text style={styles.linha}>
        <Text>Valor 2: {valor2}</Text>
      </Text>
      <Text style={styles.linha}>
        <Text>Valor 3: {valor3}</Text>
      </Text>
      <Text style={styles.media}>Multiplicação: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  media: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

