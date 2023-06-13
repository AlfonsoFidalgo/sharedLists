import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Button, Text } from 'react-native';

import { addItem } from '../store';
import Input from '../components/Input';

function AddItem({ navigation, route }) {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('');
  const [newItems, setNewItems] = useState([]);

  const handleNewItem = (item) => {
    setNewItem(item);
  };

  const handleSave = () => {
    setNewItems([...newItems, newItem]);
    const action = addItem({ newItem, listId: route.params.listId });
    dispatch(action);
    setNewItem('');
    console.log(route);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Add more stuff to the list:"
        onEdit={handleNewItem}
        value={newItem}
      />
      <Text>{newItems.length} will be added</Text>
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Button
          color="red"
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Save"
          disabled={!newItem ? true : false}
          onPress={handleSave}
        />
      </View>
    </View>
  );
}

export default AddItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  separator: {
    marginVertical: 16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 80,
    marginRight: 80,
  },
});
