import axios from 'axios';
const URL =
  'https://shared-lists-5b9fc-default-rtdb.europe-west1.firebasedatabase.app';

export async function storeList(listData) {
  const response = await axios.post(`${URL}/lists.json`, listData);
  return response.data.name; //id of the new list
}

export async function fetchLists() {
  const response = await axios.get(`${URL}/lists.json`);

  const lists = [];
  for (const key in response.data) {
    const listObj = {
      description: response.data[key].description,
      id: key,
      name: response.data[key].name,
      participants: response.data[key].participants,
      items: [],
    };
    lists.push(listObj);
  }
  return lists;
}
