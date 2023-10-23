import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'users/fetchData',
  async () => {
    try {
      const response = await axios.get('https://backendnodearticles-nppixgnv.b4a.run/api/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


const usersSlice = createSlice({
  name: "users",
  initialState: {
   isLoading: false,
   allUsers: [],
 
   isError: false
  },
  extraReducers: (builder) => {
   builder.addCase(fetchData.pending, (state, action) => {
    state.isLoading = true;
   })
   builder.addCase(fetchData.fulfilled, (state, action) => {
    state.isLoading = false;
    state.allUsers = action.payload;
  
   })
   builder.addCase(fetchData.rejected, (state, action) => {
    state.isError = true;
   })
  }
 });

export default usersSlice.reducer;
