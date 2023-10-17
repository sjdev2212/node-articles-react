import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom';
import { logout } from '../features/users/LoginSlice';



const WelcomePage = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.loginStore.token);
   
    const dispatch = useDispatch();
const logOut = () => {
    dispatch(logout());
    alert("You have been logged out");
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