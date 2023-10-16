import { configureStore } from '@reduxjs/toolkit'
import userReducer from   '../features/users/UsersSlice';
import loginReducer from   '../features/users/LoginSlice';
export const store = configureStore({
  reducer: {
    usersStore: userReducer,
    loginStore: loginReducer
  },
})