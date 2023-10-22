import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/api';

export interface Credentials {
  login: string,
  password: string,
}

export const signIn = createAsyncThunk('auth/sign-in', async (credentials: Credentials) => {
    try {
      const res = await instance.post('/auth/sign-in', credentials);
      const data = await res.data;
      if (data.csrfToken) {
        console.log('success');
        localStorage.setItem('csrfToken', data.csrfToken)
      }
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);