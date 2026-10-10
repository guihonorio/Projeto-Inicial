import { StyleSheet, View } from 'react-native';
import ConsultaCredito from '../components/ConsultaCredito';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ConsultaCredito />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});