import { View, Text, StyleSheet, Button } from 'react-native';

function ListDetailItem({ item }) {
  return (
    <View key={item} style={styles.container}>
      <Text style={styles.itemText}>{item}</Text>
      <Button title="Complete" style={styles.button} />
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
  button: {
    marginLeft: 8,
  },
});
