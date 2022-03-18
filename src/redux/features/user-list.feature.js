import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  errorMessage: '',
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  let url = 'https://jsonplaceholder.typicode.com/users';
  let response = await axios.get(url);
  return response.data;
});

const userListSlide = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = 'Oppsie';
      });
  },
});

export default userListSlide;
