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
      items: ['Onions', 'Bread', 'Green peppers', 'garlic'],
    },
  ],
  reducers: {
    addList(state, action) {
      state.push(action.payload);
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

export const { addList } = listSlice.actions;
export { store };
