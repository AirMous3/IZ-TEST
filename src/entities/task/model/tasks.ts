import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootStateType } from '@/app';

export interface TasksInterface {
  description: string;
  id: string;
  date: string;
}

interface InitialStateInterface {
  data: TasksInterface[];
}

const initialState: InitialStateInterface = {
  data: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTaskToList: (state, action: PayloadAction<TasksInterface>) => {
      state.data.push(action.payload);
    },
    changeTaskDescription: (
      state,
      action: PayloadAction<{ id: string; description: string }>,
    ) => {
      const { id, description } = action.payload;

      const task = state.data.find((task) => task.id === id);

      if (task !== undefined) {
        task.description = description;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(({ id }) => id !== action.payload);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTaskToList, changeTaskDescription, removeTask } =
  tasksSlice.actions;

// Selectors
export const todosSelector = (state: RootStateType) => state.tasks.data;
