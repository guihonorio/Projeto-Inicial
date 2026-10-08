import { ScrollView, StyleSheet, Text, View } from 'react-native';

import DadosAluno from '@/components/DadosAluno';
import MultiplicacaoCampos from '@/components/MultiplicacaoCampos';
import NomeSobrenome from '@/components/NomeSobrenome';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.exercicio}>
        <Text style={styles.titulo}>Exercício 1 - Nome e Sobrenome</Text>
        <NomeSobrenome />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.titulo}>Exercício 2 - Dados do Aluno</Text>
        <DadosAluno />
      </View>

      <View style={styles.exercicio}>
        <Text style={styles.titulo}>Exercício 3 - Multiplicação</Text>
        <MultiplicacaoCampos />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    gap: 20,
  },

  exercicio: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});