import axios from 'axios';
const URL =
  'https://shared-lists-5b9fc-default-rtdb.europe-west1.firebasedatabase.app';

export function storeList(listData) {
  axios.post(`${URL}/lists.json`, listData);
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
