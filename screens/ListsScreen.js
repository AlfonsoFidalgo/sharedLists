import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { setLists } from '../store';
import { fetchLists } from '../utils/http';
import ListItem from '../components/ListItem';

function ListsScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getLists() {
      const lists = await fetchLists();
      const action = setLists(lists);
      dispatch(action);
    }
    getLists();
  }, []);

  const lists = useSelector((state) => {
    return state.lists;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            id={item.id}
            description={item.description}
            participants={item.participants}
            items={item.items}
          />
        )}
        keyExtractor={(list) => list.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('ListForm')}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default ListsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Take up the entire screen
  },
  container: {
    flex: 1, // Take up the remaining space
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'orange',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});
