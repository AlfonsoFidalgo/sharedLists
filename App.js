import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch } from 'react-redux';

import { store } from './store';
import { removeList } from './store';
import ListsScreen from './screens/ListsScreen';
import ListDetails from './screens/ListDetails';
import ListForm from './screens/ListForm';
import AddItem from './screens/AddItem';
import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  // const handleRemoveList = (listId) => {
  //   const action = removeList({ listId });
  //   dispatch(action);
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Lists"
              component={ListsScreen}
              options={{ title: 'My Lists' }}
            />
            <Stack.Screen
              name="ListDetails"
              component={ListDetails}
              options={({ route, navigation }) => ({
                title: route.params.name,
                headerRight: ({ tintcolor }) => {
                  const dispatch = useDispatch();
                  return (
                    <IconButton
                      icon="trash-outline"
                      size={28}
                      color="red"
                      onPress={() => {
                        dispatch(removeList({ listId: route.params.id }));
                        navigation.navigate('Lists');
                      }}
                    />
                  );
                },
              })}
            />
            <Stack.Screen name="ListForm" component={ListForm} />
            <Stack.Screen
              name="AddItem"
              component={AddItem}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
