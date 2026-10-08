import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';

export default function DadosAluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const media = (Number(nota1) + Number(nota2)) / 2;

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Digite o nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text>Idade:</Text>
      <TextInput
        placeholder="Digite a idade"
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />

      <Text>Turma:</Text>
      <TextInput
        placeholder="Digite a turma"
        value={turma}
        onChangeText={(text) => setTurma(text)}
      />

      <Text>Nota 1:</Text>
      <TextInput
        placeholder="Digite a nota 1"
        value={nota1}
        onChangeText={(text) => setNota1(text)}
      />

      <Text>Nota 2:</Text>
      <TextInput
        placeholder="Digite a nota 2"
        value={nota2}
        onChangeText={(text) => setNota2(text)}
      />

      <Pressable
        onPress={() => {
          Alert.alert(
            'Dados do Aluno',
            `Nome: ${nome}
Idade: ${idade}
Turma: ${turma}
Nota 1: ${nota1}
Nota 2: ${nota2}
Média: ${media}`
          );
        }}
      >
        <Text>Mostrar Dados do Aluno</Text>
      </Pressable>
    </View>
  );
}