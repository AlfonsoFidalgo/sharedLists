import axios from 'axios';
const URL =
  'https://shared-lists-5b9fc-default-rtdb.europe-west1.firebasedatabase.app/';

export function storeList(listData) {
  axios.post(`${URL}lists.json`, listData);
}
