import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom';
import { logout } from '../features/users/LoginSlice';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'



const WelcomePage = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.loginStore.token);

    const logingOut = () => {
        toast.success("You have been logged out");
    }
   
    const dispatch = useDispatch();
const logOut = () => {
    dispatch(logout());
    logingOut();
    navigate("/login");
    console.log(token);

}

  return (
    <main>

        <button onClick={logOut}>
            Log Out
        </button>
        <h1>
            Welcome user!
        </h1>


    </main>
  )
}

export default WelcomePage