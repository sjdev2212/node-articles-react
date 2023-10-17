import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './LoginSlice';


const Login = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loginStore.isLoading);
    const isError = useSelector((state) => state.loginStore.isError);
    const token = useSelector((state) => state.loginStore.token);


 const [email, setEmail] = useState("");
 const [password, setpassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
          navigate("/welcome");
        }
        else{
            navigate("/login");
        }
      }
      , [token]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setpassword(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          email,
          password
        };
        dispatch(login(data));
        if (isError) {
          alert("Something went wrong...");
        }
        if (token) {
          navigate("/welcome");
        }

       
      }

      console.log(token)


  return (
    <main>
        <h1>Login</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong...</p>}
     

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input    onChange={handleEmailChange} type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input onChange={handlePasswordChange} type="password" name="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </main>
  )
}

export default Login