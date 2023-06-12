import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import ListDetailItem from '../components/ListDetailItem';

function ListDetails() {
  const route = useRoute();
  const { name } = route.params;
  const [items, setItems] = useState(route.params.items);

  const handleComplete = (item) => {
    const updatedItems = items.map((itm) => {
      if (itm.item === item.item) {
        return { ...itm, completed: !item.completed };
      }
      return itm;
    });
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <ScrollView>
        {items.map((item) => (
          <ListDetailItem
            item={item}
            key={item.item}
            completed={item.completed}
            onPress={handleComplete}
          />
        ))}
      </ScrollView>
      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <Button title="Add items" onPress={() => console.log('cancel')} />
        <Button
          title="Save"
          onPress={() => console.log('handle save changes')}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
