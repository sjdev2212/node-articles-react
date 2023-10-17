import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const loginSuccess = () => {
    toast.success("Login successfull");
    }

export const login = createAsyncThunk("login/login", async (data) => {
  try {
    const response = await axios.post(
      "https://backendnodearticles-nppixgnv.b4a.run/api/login",
      data
    );
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
        loginSuccess();
    }
    return response.data;
  } catch (error) {
    throw error;
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    token: "",
    isError: false,
  },
    reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.token = "";

    },
    },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const { logout} = loginSlice.actions

export default loginSlice.reducer;
