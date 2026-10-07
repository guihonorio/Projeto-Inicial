import { StyleSheet, View } from 'react-native';

import Aluno from '@/components/Aluno';
import Funcionario from '@/components/Funcionario';
import Multiplicacao from '@/components/Multiplicacao';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Funcionario
        nome="João"
        idade={25}
        setor="TI"
      />

      <Aluno
        nome="Guilherme"
        idade={20}
        turma="ADS"
        nota1={8}
        nota2={9}
      />

      <Multiplicacao
        valor1={2}
        valor2={3}
        valor3={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 30,
  },
});