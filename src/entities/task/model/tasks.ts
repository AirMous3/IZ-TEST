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
    changeTaskDescription: (state, action) => {
      state.data = state.data.map(({ id, description, date }) =>
        id === action.payload.id
          ? {
              id,
              date,
              description: action.payload.description,
            }
          : { id, description, date },
      );
    },
    removeTask: (state, action) => {
      state.data = state.data.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTaskToList, changeTaskDescription, removeTask } = tasksSlice.actions;
