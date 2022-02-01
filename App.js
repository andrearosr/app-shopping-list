import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button onPress={() => {}} title="Add" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 20,
  },
});
