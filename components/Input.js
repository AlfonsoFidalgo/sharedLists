import { View, TextInput, Text, StyleSheet } from 'react-native';

function Input({ label, value, onEdit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        value={value}
        onChangeText={(e) => onEdit(e)}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginLeft: 16,
    width: '90%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
