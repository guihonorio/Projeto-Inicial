import { Text, View } from 'react-native';

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
    <View>
      <Text>Valor 1: {valor1}</Text>
      <Text>Valor 2: {valor2}</Text>
      <Text>Valor 3: {valor3}</Text>
      <Text>Multiplicação: {resultado}</Text>
    </View>
  );
}