import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
//In react-router-dom v6 useHistory() is replaced by useNavigate().
//history.push("/"), we use navigate('/'). we dont need to use push with navigate

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
        //irbaaz20@gmail.com
        //123456789
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate('/')
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div className="login">
        <NavLink to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </NavLink>

        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <h5>Password</h5>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              className="login__signInButton"
              onClick={singIn}
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
