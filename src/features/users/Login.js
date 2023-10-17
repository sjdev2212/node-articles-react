import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "./LoginSlice";
import "../../styles/Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.loginStore.isError);
  const token = useSelector((state) => state.loginStore.token);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/welcome");
    } else {
      navigate("/login");
    }
  }, [token]);

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
      password,
    };
    dispatch(login(data));
    if (isError) {
      alert("Something went wrong...");
    }
    if (token) {
      navigate("/welcome");
    }
  };

  console.log(token);

  return (
    <>
      <main className="login-container">
        <section className="login-left">
          <h1 className="vertical">Login</h1>
        </section>

        <section className="login-right">
          <form onSubmit={handleSubmit}>
            <div className="login-group">
              <label htmlFor="email">Email: </label>
              <input
                onChange={handleEmailChange}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="login-group">
              <label htmlFor="password">Password: </label>
              <input
                onChange={handlePasswordChange}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="login-links">
            <Link to="/register">Register</Link>
            <Link to="/">Home</Link>
          </div>
        </section>
      </main>

      <main className="login-container-mob">
        <div>
          <h1 className="login-h1-mob">Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="login-group">
            <label htmlFor="email">Email: </label>
            <input
              onChange={handleEmailChange}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="login-group">
            <label htmlFor="password">Password: </label>
            <input
              onChange={handlePasswordChange}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-links-mob">
          <Link to="/register">Register</Link>
          <Link to="/">Home</Link>
        </div>
      </main>
    </>
  );
};

export default Login;
