import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ListDetailItem from '../components/ListDetailItem';

function ListDetails() {
  const route = useRoute();
  const { name, items } = route.params;
  console.log(items);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <ScrollView>
        {items.map((item) => (
          <ListDetailItem item={item} key={item} />
        ))}
      </ScrollView>
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
});
