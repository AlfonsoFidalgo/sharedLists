import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Button, Text } from 'react-native';

import ListDetailItem from '../components/ListDetailItem';
import { toggleCompleteItem } from '../store';

function ListDetails({ navigation }) {
  const route = useRoute();
  const dispatch = useDispatch();
  const listDetails = useSelector((state) => {
    const allLists = state.lists;
    return allLists.filter((lst) => lst.id === route.params.id)[0];
  });
  //   const [items, setItems] = useState(route.params.items);
  const [hasChanged, setHasChanged] = useState(false);

  const handleComplete = (item) => {
    // const updatedItems = items.map((itm) => {
    //   if (itm.item === item.item) {
    //     return { ...itm, completed: !item.completed };
    //   }
    //   return itm;
    // });
    // setItems(updatedItems);
    const action = toggleCompleteItem({ item, listId: route.params.id });
    dispatch(action);
    setHasChanged(true);
  };

  let content = <Text>Losding...</Text>;
  if (listDetails) {
    content = (
      <ScrollView>
        {listDetails.items.map((item) => (
          <ListDetailItem
            item={item}
            key={item.item}
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
      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <Button
          title="Share"
          onPress={() => console.log('to be implemented')}
        />
        <Button
          title="Save"
          onPress={() => console.log('handle save changes')}
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
});
