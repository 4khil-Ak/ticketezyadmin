import React from "react";
import { Alert } from "react-bootstrap";

const Login = (props) => {
  return (
    <div class="login-body">
      <div class="login">
        <div class="form">
          <form class="login-form" onSubmit={props.handleLogin}>
            <div className="d-flex justify-content-center">
              <span class="fa fa-lock mb-3"></span>&ensp;
              <span>Admin Login</span>
            </div>
            <input
              type="text"
              id="email"
              placeholder="email"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={props.onChangeHandler}
              // value={props.loginCredential.user_name}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={props.onChangeHandler}
              // value={props.loginCredential.password}
              required
            />
            {props.error && <Alert variant="danger">{props.error}</Alert>}
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
