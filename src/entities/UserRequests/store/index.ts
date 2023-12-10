import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tgBotInstance from 'shared/api/tg-bot';
import { ProjectRequest, UserRequest } from '../types';

export const createUserRequest = createAsyncThunk(
  'userRequests/createUserRequest',
  async (userRequest: UserRequest) => {
    try {
    const res = await tgBotInstance.post(`/user-request`, userRequest, {
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

export const createProjectRequest = createAsyncThunk(
  'userRequests/createProjectRequest',
  async (projectRequest: ProjectRequest) => {
    try {
    const res = await tgBotInstance.post(`/project-request`, projectRequest, {
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