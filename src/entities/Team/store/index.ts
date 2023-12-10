import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'shared/api';
import { Team } from '../types';

export const fetchAPITeams = createAsyncThunk('teams/fetchTeams', async () => {
  try {
    const res = await instance.get('/teams');
    const data = await res.data;
    return data;
  } catch (e) {
    console.log('Произошла ошибка');
    console.log(e);
  }
});

export const createTeam = createAsyncThunk(
  'teams/createTeam',
  async (team: Team) => {
    if (!localStorage.getItem('csrfToken')) {
      alert('Авторизация не выполнена');
      return;
    }
    try {
      const res = await instance.post(`/teams`, team, {
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

export const updateTeam = createAsyncThunk(
  'teams/updateTeam',
  async (team: Team) => {
    try {
      const res = await instance.put(`/teams/${team.id}`, team, {
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

export const fetchTeam = createAsyncThunk(
  'teams/fetchTeam',
  async (id: number) => {
    try {
      const res = await instance.get(`/teams/${id}`);
      const data = await res.data;
      return data;
    } catch (e) {
      console.log('Произошла ошибка');
      console.log(e);
    }
  }
);

export const teamsSlice = createSlice({
  name: 'Teams',
  initialState: {
    value: [] as Team[],
    team: {} as Team,
    isLoading: false,
    error: null as null | undefined | string,
  },
  reducers: {
    fetchTeams: (state, action) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPITeams.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAPITeams.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchAPITeams.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.team = action.payload;
    });
    builder.addCase(updateTeam.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.team = action.payload;
    });
    builder.addCase(fetchTeam.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTeam.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.team = action.payload;
    });
  },
});

export const { fetchTeams } = teamsSlice.actions;

export default teamsSlice.reducer;
