import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import ListItem from '../components/ListItem';

const LISTS = [
  {
    id: 1,
    name: 'Rewe stuff',
    participants: 2,
    description:
      'Just the grocery shopping list of items that we normally buy in Rewe',
    items: [
      'Onions',
      'Zuchini',
      'Green peppers',
      'garlic',
      'milk',
      'bread',
      'bananans',
      'yogurts',
    ],
  },
  {
    id: 2,
    name: 'Rossmann',
    participants: 2,
    description:
      "Rossmann related stuff: cat's food, cosmetics and cleaning products",
    items: ['cats food', 'cats litter', 'tooth paste', 'washing up liquid'],
  },
];

function ListsScreen({ navigation }) {
  const [lists, setLists] = useState(LISTS);
  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
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
