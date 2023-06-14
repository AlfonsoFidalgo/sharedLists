import { View, Text, StyleSheet, Button } from 'react-native';

function ListDetailItem({ item, onPress, completed }) {
  const toggleComplete = () => {
    onPress(item);
  };
  console.log(item);

  return (
    <View key={item.id} style={styles.container}>
      <Text style={[completed ? styles.completed : styles.itemText]}>
        {item.item}
      </Text>
      <Button
        title={completed ? 'Uncomplete' : 'Complete'}
        style={styles.button}
        onPress={toggleComplete}
      />
    </View>
  );
}

export default ListDetailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  completed: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  button: {
    marginLeft: 8,
  },
});
