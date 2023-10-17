import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './RegisterSlice';
import '../../styles/Register.css'
import { useNavigate} from 'react-router-dom';


const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

const navigate = useNavigate();

  
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
        setUsername("");
        setEmail("");
        setpassword("");
        navigate("/login")

       
      }
  return (
    <main className="register-container">
      <section className="register-left">
        <h1 className="vertical">Register</h1>

      </section>
      <section className="register-right">

        

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input  onChange={handleUsernameChange} type="text" id="username" name="username" required />

            <label htmlFor="email">Email</label>
            <input onChange={handleEmailChange} type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input onChange={handlePasswordChange} type="password" id="password" name="password" required />

            <button type="submit">Register</button>
        </form>
      </section>
    </main>
  )
}

export default Register