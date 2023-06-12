import { View, Text, StyleSheet, Button } from 'react-native';
import Input from '../components/Input';

function ListForm() {
  return (
    <View style={styles.container}>
      <Input label="Name your new list:" />
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Button color="red" title="Cancel" />
        <Button title="Save" />
      </View>
    </View>
  );
}

export default ListForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 80,
    marginRight: 80,
  },
  separator: {
    marginVertical: 16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
