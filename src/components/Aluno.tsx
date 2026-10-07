import { StyleSheet, Text, View } from 'react-native';

type AlunoProps = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

export default function Aluno({
  nome,
  idade,
  turma,
  nota1,
  nota2,
}: AlunoProps) {
  const media = (nota1 + nota2) / 2;

  return (
    <View style={styles.div}>
      <Text style={styles.titulo}>Nome: {nome}</Text>
      <Text style={styles.linha}>
        <Text>Idade: {idade}</Text>
      </Text>
      <Text style={styles.linha}>
        <Text>Turma: {turma}</Text>
      </Text>
      <Text style={styles.linha}>
        <Text>Nota 1: {nota1}</Text>
      </Text>
      <Text style={styles.linha}>
        <Text>Nota 2: {nota2}</Text>
      </Text>
      <Text style={styles.media}>Média: {media}</Text>
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

