
import React, { useState } from "react";
import "./Login.css";
import PulseLoader from "react-spinner";
import ecm from "../img/ecm.png";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase"

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(auth => {
        navigate("/");
      })
      .catch((error) => alert(error.message))
      .then(() => setLoading(false));
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src={ecm}
          alt="amazon-logo"
        />
      </NavLink>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleOnChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
          />

          <button className="login__signInButton">
            {loading ? (
              <PulseLoader size={8} color={"black"} loading={loading} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p>
          By continuing, you agree to AMAZON FAKE CLONE Terms of Use and Privacy
          Notice.
        </p>

        <div className="login__newUser">
          <p>¿Don't you have an account?</p>
          <NavLink to="/register">
            <button className="login__registerButton">
              Create your Amazon Account
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
