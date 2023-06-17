import { View, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { storeList } from '../utils/http';
import { addList } from '../store';
import Input from '../components/Input';

function ListForm() {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNameInput = (input) => {
    setListName(input);
  };

  const handleDescriptionInput = (input) => {
    setListDescription(input);
  };

  const handleAddList = async () => {
    const newList = {
      name: listName,
      participants: 1,
      description: listDescription,
      items: [],
    };
    const newListId = await storeList(newList);
    const action = addList({ ...newList, id: newListId });
    dispatch(action);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input
        label="Name your new list:"
        value={listName}
        onEdit={handleNameInput}
      />
      <Input
        label="Add an optional description:"
        value={listDescription}
        onEdit={handleDescriptionInput}
      />
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Button color="red" title="Cancel" onPress={navigation.goBack} />
        <Button
          title="Save"
          onPress={handleAddList}
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
