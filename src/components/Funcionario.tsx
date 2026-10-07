import { Text, View } from 'react-native';

type FuncionarioProps = {
  nome: string;
  idade: number;
  setor: string;
};

export default function Funcionario({ nome, idade, setor }: FuncionarioProps) {
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Setor: {setor}</Text>
    </View>
  );
}