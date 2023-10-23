import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const loginSuccess = () => {
    toast.info(`Welcome ${localStorage.getItem("user")} `);
    }

export const login = createAsyncThunk("login/login", async (data) => {
  try {
    const response = await axios.post(
      "https://backendnodearticles-nppixgnv.b4a.run/api/login",
      data
    );
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      localStorage.setItem("avatar", response.data.avatar);
console.log(response.data)
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
    currentUser: "",
    avatar : ""
  },
    reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.token = "";
      localStorage.removeItem("user");
      state.currentUser = "";


    },
    },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.currentUser = action.payload.user;
      state.avatar = action.payload.avatar;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
export const { logout} = loginSlice.actions

export default loginSlice.reducer;
