import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/api';
import { Project } from '../types';
import { useAppDispatch } from 'shared/store';

export const fetchAPIProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    try {
      const res = await instance.get('/projects');
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async (project: Project) => {
    try {
      const res = await instance.put(`/projects/${project.id}`, project, {
        headers: {
          'Content-Type': 'Application/json',
        },
      });
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const getCategories = createAsyncThunk(
  'projects/categories',
  async () => {
    try {
      const res = await instance.get(`/projects/categories`);
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const createProject = createAsyncThunk(
  'projects/createProject',
  async (project: Project) => {
    if (!localStorage.getItem('csrfToken')) {
      alert('Авторизация не выполнена');
      return;
    }
    try {
      const res = await instance.post(`/projects`, project, {
        headers: {
          'x-csrf-token': localStorage.getItem('csrfToken'),
          'X-Session-ID': localStorage.getItem('sessionID'),
          'Content-Type': 'Application/json',
        },
      });
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const fetchProject = createAsyncThunk(
  'projects/fetchProject',
  async (id: number) => {
    try {
      const res = await instance.get(`/projects/${id}`);
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const uploadProjectFiles = createAsyncThunk(
  'projects/uploadProjectFiles', 
  async ({projectId, files}: {projectId: number, files: File[]}) => {
    if (!localStorage.getItem('csrfToken')) {
      alert('Авторизация не выполнена');
      return;
    }
    try {
      const formData = new FormData();
      for (const file of files) {
        formData.append("file", file);
      }
      const res = await instance.post(`/projects/${projectId}/documents`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'x-csrf-token': localStorage.getItem('csrfToken'),
          'X-Session-ID': localStorage.getItem('sessionID'),
        }
      });
      const data = await res.data;
      return data;
    } 
    catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const getProjectDocuments = createAsyncThunk(
  'projects/documents',
  async (projectId: number) => {
    try {
      const res = await instance.get(`/projects/${projectId}/documents`);
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
)

export const removeProject = createAsyncThunk(
  'projects/remove-project',
  async (projectId: number) => {
    try {
      const res = await instance.delete(`/projects/${projectId}`);
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
)

export const projectsSlice = createSlice({
  name: 'Projects',
  initialState: {
    value: [] as Project[],
    project: {} as Project,
    isLoading: false,
    error: null as null | undefined | string,
    categories: [] as {id: number, name: string}[],
    documents: [] as File[],
  },
  reducers: {
    fetchProjects: (state, action) => {
      state.value.push(action.payload);
    },
    fetchCategories: (state, action) => {
      state.categories.push(action.payload);
    }
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
    builder.addCase(createProject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.isLoading = false;
      state.project = action.payload;
      window.location.replace('/admin-projects');
    });
    // builder.addCase(removeProject.fulfilled, (state, action) => {
    //   fetchAPIProjects();
    // });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getProjectDocuments.fulfilled, (state, action) => {
      state.documents = action.payload;
    })
  },
});

// const fetchAPIProjects = async () => {
//   const projects = await instance.get('/todos');

//   dispatch({ type: 'todos/todosLoaded', payload: response.todos });
// };

// Action creators are generated for each case reducer function
export const { fetchProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
