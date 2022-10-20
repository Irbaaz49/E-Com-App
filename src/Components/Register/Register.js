import React, { useState } from "react";
import "./Register.css";
import PulseLoader from "react-spinner"
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import ecm from "../img/ecm.png";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    setLoading(true);

    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        auth.user.updateProfile({
          displayName: user.name,
        });
      })
      .then(() => {
        // I did this because if I perform the action continuously, the username takes it as its initial value (null)
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => alert(error.message))
      .then(() => setLoading(true));
  };

  return (
    <div className="register">
      <NavLink to="/">
        <img
          src={ecm}
          alt="amazon-logo"
          className="register__logo"
        />
      </NavLink>

      <div className="register__container">
        <h1>Create Account</h1>

        <form>
          <h5>Your name</h5>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleOnChange}
          />
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

          <button onClick={register}>
            {loading ? (
              <PulseLoader size={8} color={"black"} loading={loading} />
            ) : (
              "Create account on Amazon"
            )}
          </button>
        </form>

        <p>
          By creating an account, you agree to the Terms of Use and Privacy
          Notice of AMAZON FAKE CLONE.
        </p>

        <div className="register__alreadyAccount">
          ¿Already have an account?&nbsp;
          <NavLink to="/login">
            <strong>Sign in</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
