import { createSlice } from '@reduxjs/toolkit';
import instance from 'shared/api';

export const projectsSlice = createSlice({
  name: 'Projects',
  initialState: {
    value: [] as any[],
  },
  reducers: {
    fetchProjects: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

const fetchAPIProjects = async () => {
  const projects = await instance.get('/todos');

  dispatch({ type: 'todos/todosLoaded', payload: response.todos });
};

// Action creators are generated for each case reducer function
export const { fetchProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
