import { configureStore, createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [
    {
      id: 1,
      name: 'Groceries',
      participants: 2,
      description:
        'Food that we need to buy to provide our bodies with the right nutrients to sustain life',
      items: [
        { item: 'Onions', completed: false },
        { item: 'Bread', completed: false },
      ],
    },
  ],
  reducers: {
    addList(state, action) {
      state.push(action.payload);
    },
    addItem(state, action) {
      const item = { item: action.payload, completed: false };
      //TO DO: an item should be added in the correct list, on on the [0]
      state[0].items.push(item);
    },
    removeList(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    lists: listSlice.reducer,
  },
});

export const { addList, addItem } = listSlice.actions;
export { store };
