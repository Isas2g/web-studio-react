import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/api';
import { Project } from '../types';

export const fetchAPIProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const res = await instance.get('/projects');
    const data = await res.data;
    console.log(data);
    return data;
  }
);

export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async (project: Project) => {
    const res = await instance.put(`/projects/${project.id}`, project, {
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    const data = await res.data;
    return data;
  }
);

export const fetchProject = createAsyncThunk(
  'projects/fetchProject',
  async (id: number) => {
    const res = await instance.get(`/projects/${id}`);
    const data = await res.data;
    return data;
  }
);

export const projectsSlice = createSlice({
  name: 'Projects',
  initialState: {
    value: [] as Project[],
    project: {} as Project,
    isLoading: false,
    error: null as null | undefined | string,
  },
  reducers: {
    fetchProjects: (state, action) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPIProjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAPIProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchAPIProjects.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.project = action.payload;
    });
    builder.addCase(updateProject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.project = action.payload;
    });
    builder.addCase(fetchProject.pending, (state) => {
      state.isLoading = true;
    });
  },
});

// const fetchAPIProjects = async () => {
//   const projects = await instance.get('/todos');

//   dispatch({ type: 'todos/todosLoaded', payload: response.todos });
// };

// Action creators are generated for each case reducer function
export const { fetchProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
