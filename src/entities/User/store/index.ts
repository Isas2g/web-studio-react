import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/api';
import { User } from '../types';

export interface Credentials {
  login: string;
  password: string;
}

export const signIn = createAsyncThunk(
  'auth/sign-in',
  async (credentials: Credentials) => {
    try {
      const res = await instance.post('/auth/sign-in', credentials);
      const data = await res.data;
      if (data.csrfToken) {
        console.log('success');
        localStorage.setItem('csrfToken', data.csrfToken);
      }
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const fetchAPIUsers = createAsyncThunk('/users', async () => {
  try {
    const res = await instance.get('/users');
    const data = await res.data;
    console.log(data);
    return data;
  } catch (e) {
    console.log('Произошла ошибка');
    console.log(e);
  }
});

export const createUser = createAsyncThunk(
  'users/createUser',
  async (user: User) => {
    try {
      const res = await instance.post(`/users`, user, {
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

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user: User) => {
    try {
      const res = await instance.put(`/users/${user.id}`, user, {
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

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id: number) => {
    try {
      const res = await instance.get(`/users/${id}`);
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const usersSlice = createSlice({
  name: 'Users',
  initialState: {
    value: [] as User[],
    user: {} as User,
    isLoading: false,
    error: null as null | undefined | string,
  },
  reducers: {
    fetchUsers: (state, action) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPIUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAPIUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchAPIUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
  },
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;
