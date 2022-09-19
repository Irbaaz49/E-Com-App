// import React, { useState } from "react";
// import "./Login.css";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// //In react-router-dom v6 useHistory() is replaced by useNavigate().
// //history.push("/"), we use navigate('/'). we dont need to use push with navigate

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const singIn = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(auth => {
//         navigate('/')
//         //irbaaz20@gmail.com
//         //123456789
//       })
//       .catch((err) => alert(err.message));
//   };

//   const register = (e) => {
//     e.preventDefault();
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         console.log(auth);
//         if (auth) {
//           navigate('/')
//         }
//       })
//       .catch((err) => alert(err.message));
//   };

//   return (
//     <>
//       <div className="login">
//         <NavLink to="/">
//           <img
//             className="login__logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           />
//         </NavLink>

//         <div className="login__container">
//           <h1>Sign-in</h1>
//           <form>
//             <h5>E-mail</h5>
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//             <h5>Password</h5>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />

//             <button
//               className="login__signInButton"
//               onClick={singIn}
//               type="submit"
//             >
//               Sign In
//             </button>
//           </form>

//           <p>
//             By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//             Sale. Please see our Privacy Notice, our Cookies Notice and our
//             Interest-Based Ads Notice.
//           </p>
//           <button className="login__registerButton" onClick={register}>
//             Create your Amazon Account
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./Login.css";
import PulseLoader from "react-spinner"

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
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
