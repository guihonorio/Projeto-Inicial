import { StyleSheet, Text, View } from 'react-native';

type FuncionarioProps = {
  nome: string;
  idade: number;
  setor: string;
};

export default function Funcionario({ nome, idade, setor }: FuncionarioProps) {
  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Nome: {nome}</Text>
      <Text style={styles.linha}>
        <Text>Idade: {idade}</Text>
      </Text>
      <Text style={styles.linha}>
        <Text>Setor: {setor}</Text>
      </Text>
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

