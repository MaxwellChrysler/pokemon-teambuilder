import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  };

  const handleSetLoginInfo = () => {
    const loginInfo = {
      username: "Trainer233",
      password: "12345678",
    };

    setUsername(loginInfo.username);
    setPassword(loginInfo.password);
  };

  return (<>
  <div>
  
    <div className="loginForm">
     
      <form className="formPanel" onSubmit={handleLogin}>
        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div className="loginText">
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
        
          <input className="btn" type="submit" name="submit" value="Log In" />
          {/* <div className="setLogin" >
            <button onClick={handleSetLoginInfo}></button>
          </div> */}
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default LoginForm;
