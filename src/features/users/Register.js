import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './RegisterSlice';

const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setpassword(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          username,
          email,
          password
        };
        dispatch(register(data));
      }
  return (
    <main>
        <h1>
            Register
        </h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input onChange={handleUsernameChange} type="text" id="username" name="username" />

            <label htmlFor="email">Email</label>
            <input onChange={handleEmailChange} type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input onChange={handlePasswordChange} type="password" id="password" name="password" />

            <button type="submit">Register</button>
        </form>
    </main>
  )
}

export default Register