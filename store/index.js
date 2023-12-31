import { configureStore, createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [
    // {
    //   id: 1,
    //   name: 'Groceries',
    //   participants: 2,
    //   description:
    //     'Food that we need to buy to provide our bodies with the right nutrients to sustain life',
    //   items: [
    //     { item: 'Onions', completed: false, id: 34 },
    //     { item: 'Bread', completed: false, id: 57 },
    //   ],
    // },
  ],
  reducers: {
    addList(state, action) {
      state.push(action.payload);
    },
    addItem(state, action) {
      const listId = action.payload.listId;
      const item = {
        item: action.payload.newItem,
        completed: false,
        id: Math.round(Math.random() * 99999),
      };
      const updatedLists = state.map((list) => {
        if (list.id === listId) {
          list.items.push(item);
        }
        return list;
      });
    },
    setLists(state, action) {
      return action.payload;
    },
    toggleCompleteItem(state, action) {
      const { listId, item } = action.payload;

      const list = state.filter((lst) => lst.id === listId)[0];
      const updatedItems = list.items.map((itm) => {
        if (itm.id === item.id) {
          return { ...itm, completed: !item.completed };
        }
        return itm;
      });
      list.items = updatedItems;
    },
    removeItem(state, action) {
      const { listId, items } = action.payload;

      const list = state.filter((lst) => lst.id === listId)[0];
      uncompletedItems = items.filter((itm) => {
        return itm.completed === false;
      });
      list.items = uncompletedItems;
    },
    removeList(state, action) {
      const { listId } = action.payload;
      return state.filter((lst) => lst.id !== listId);
    },
  },
});

const store = configureStore({
  reducer: {
    lists: listSlice.reducer,
  },
});

export const {
  addList,
  addItem,
  toggleCompleteItem,
  removeItem,
  removeList,
  setLists,
} = listSlice.actions;
export { store };
