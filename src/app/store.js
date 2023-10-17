import { configureStore } from '@reduxjs/toolkit'
import userReducer from   '../features/users/UsersSlice';
import loginReducer from   '../features/users/LoginSlice';
import registerReducer from   '../features/users/RegisterSlice';
export const store = configureStore({
  reducer: {
    usersStore: userReducer,
    loginStore: loginReducer,
    registerStore: registerReducer,
  },
})