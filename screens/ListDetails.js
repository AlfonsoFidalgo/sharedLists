import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import ListDetailItem from '../components/ListDetailItem';
import { toggleCompleteItem, removeItem } from '../store';

function ListDetails({ navigation }) {
  const route = useRoute();
  const dispatch = useDispatch();
  const listDetails = useSelector((state) => {
    const allLists = state.lists;
    return allLists.filter((lst) => lst.id === route.params.id)[0];
  });
  const [hasChanged, setHasChanged] = useState(false);

  const handleComplete = (item) => {
    const action = toggleCompleteItem({ item, listId: route.params.id });
    dispatch(action);
    setHasChanged(true);
  };

  const handleSave = (updatedItems) => {
    const action = removeItem({ items: updatedItems, listId: route.params.id });
    dispatch(action);
    setHasChanged(false);
  };

  let content = <Text>Loading...</Text>;
  if (listDetails) {
    content = (
      <ScrollView>
        {listDetails.items.map((item) => (
          <ListDetailItem
            item={item}
            key={item.id}
            completed={item.completed}
            onPress={handleComplete}
          />
        ))}
      </ScrollView>
    );
  }
  return (
    <View style={styles.container}>
      {content}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddItem', { listId: route.params.id })
        }
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <Button
          title="Share"
          onPress={() => console.log('to be implemented')}
        />
        <Button
          title="Save"
          onPress={() => handleSave(listDetails.items)}
          disabled={!hasChanged}
        />
      </View>
    </View>
  );
}

export default ListDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 64,
    marginRight: 64,
  },
  addButton: {
    marginLeft: Dimensions.get('window').width / 4,
    backgroundColor: 'orange',
    borderRadius: 50,
    width: '50%',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
