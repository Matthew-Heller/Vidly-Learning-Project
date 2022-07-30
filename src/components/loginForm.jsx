import React from "react";
import Form from "./Common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  doSubmit = () => {
    console.log("submitted");
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
