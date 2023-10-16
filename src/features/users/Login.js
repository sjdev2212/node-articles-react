import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

 const [email, setEmail] = useState("");
 const [password, setpassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setpassword(event.target.value);
      };
const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    axios.post('https://backendnodearticles-nppixgnv.b4a.run/api/login', data)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })


}
  return (
    <main>

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