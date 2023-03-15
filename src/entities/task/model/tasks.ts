import { createSlice } from '@reduxjs/toolkit';

export interface tasksInterface {
  description: string;
  id: string;
  date: string;
}

interface initialStateInterface {
  data: tasksInterface[];
}

const initialState: initialStateInterface = {
  data: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      state.data.push(action.payload.task);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTaskToList } = tasksSlice.actions;
