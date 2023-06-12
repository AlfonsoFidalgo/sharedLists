import { View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';

function ListForm() {
  const [listName, setListName] = useState('');
  const navigation = useNavigation();

  const handleNameInput = (input) => {
    setListName(input);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Name your new list:"
        value={listName}
        onEdit={handleNameInput}
      />
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Button color="red" title="Cancel" onPress={navigation.goBack} />
        <Button
          title="Save"
          onPress={() => console.log(listName)}
          disabled={!listName.length}
        />
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
