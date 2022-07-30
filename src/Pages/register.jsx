import React from "react";
import Form from "../components/Common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  doSubmit = () => {
    console.log("submitted");
  };

  schema = {
    username: Joi.string()
      .required()
      .email({ minDomainSegments: 2 })
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name"),
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
