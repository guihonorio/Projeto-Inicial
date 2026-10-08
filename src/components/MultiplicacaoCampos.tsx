import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';

export default function MultiplicacaoCampos() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  const resultado = Number(valor1) * Number(valor2) * Number(valor3);

  return (
    <View>
      <Text>Valor 1:</Text>
      <TextInput
        placeholder="Digite o valor 1"
        value={valor1}
        onChangeText={(text) => setValor1(text)}
      />

      <Text>Valor 2:</Text>
      <TextInput
        placeholder="Digite o valor 2"
        value={valor2}
        onChangeText={(text) => setValor2(text)}
      />

      <Text>Valor 3:</Text>
      <TextInput
        placeholder="Digite o valor 3"
        value={valor3}
        onChangeText={(text) => setValor3(text)}
      />

      <Text>Multiplicação: {resultado}</Text>

      <Pressable
        onPress={() => {
          Alert.alert(
            'Resultado da Multiplicação',
            `Valor 1: ${valor1}
Valor 2: ${valor2}
Valor 3: ${valor3}
Multiplicação: ${resultado}`
          );
        }}
      >
        <Text>Mostrar Multiplicação</Text>
      </Pressable>
    </View>
  );
}