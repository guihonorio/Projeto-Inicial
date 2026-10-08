import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';

export default function NomeSobrenome() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text>Sobrenome:</Text>
      <TextInput
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={(text) => setSobrenome(text)}
      />

      <Pressable
        onPress={() => {
          Alert.alert(`Nome completo: ${nome} ${sobrenome}`);
        }}
      >
        <Text>Mostrar Nome Completo</Text>
      </Pressable>
    </View>
  );
}