import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const registerSuccess = () => {
    toast.success("Register successfull, please login");
    }

    const existingUser = () => {
        toast.error("User already exists");
        }

export const register = createAsyncThunk("register/register", async (data) => {

  try {
    const response = await axios.post(
      "https://backendnodearticles-nppixgnv.b4a.run/api/register",
      data
    );
    if (response.status === 201) {
      existingUser();
    }
    if (response.status === 200) {
        registerSuccess();
      
    }

      
    return response.data;
  } catch (error) {
    alert("Something went wrong...")
    throw error;
  }
});

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    token: "",
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isError = true;
    });
  },
});


export default registerSlice.reducer;
