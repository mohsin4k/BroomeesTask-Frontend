import React, { useState } from "react";
import validation from "../utilities/signupValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword:""
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function checkError(er) {
    if (
      er.first_name === "" &&
      er.last_name === "" &&
      er.email === "" &&
      er.username === "" &&
      er.password === "" && 
      er.confirmPassword===""
    ) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let er = validation(values);
    setErrors(er);
    let canProceed = checkError(er);
    if (canProceed) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log(res);
          alert(res.data.message)
          navigate("/Home");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleInput = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center  h-100 w-100">
      <div className="bg-white p-3 rounded width-90">
        <div>
          <h1 className="main-heading" style={{ color: "#632ae8" }}>Explore & Experience</h1>
          <p className="para-heading" style={{ color: "#632ae8" }}>
            Get into your most comfortable journey yet. All the way up
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group  margin-bottom fistname_lastname">
            <div className="relative width-48">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                onChange={handleInput}
                className="form-control input-height rounded-0"
              />

              {errors.first_name && (
                <span className="text-danger error-font absolute">
                  {errors.first_name}
                </span>
              )}
            </div>
            {/* <span className="input-group-btn" style={{ width: "10px" }}></span> */}
            <div className="relative width-48">
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={handleInput}
                className="form-control input-height rounded-0"
              />

              {errors.last_name && (
                <span className="text-danger error-font absolute">{errors.last_name}</span>
              )}
            </div>
          </div>
          <div className=" margin-bottom relative">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              className="form-control input-height rounded-0"
            />
            {errors.email && (
              <span className="text-danger error-font absolute">{errors.email}</span>
            )}
          </div>
          <div className=" margin-bottom relative">
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={handleInput}
              className="form-control input-height rounded-0"
            />
            {errors.username && (
              <span className="text-danger error-font absolute">{errors.username}</span>
            )}
          </div>
          <div className=" margin-bottom relative">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              className="form-control input-height rounded-0"
            />
            {errors.password && (
              <span className="text-danger error-font absolute">{errors.password}</span>
            )}
          </div>
          <div className=" margin-bottom relative">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleInput}
              className="form-control input-height rounded-0"
            />
            {errors.confirmPassword && (
              <span className="text-danger error-font absolute">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <button
            type="submit"
            color="primary"
            style={{ backgroundColor: "#7632ed" }}
            className="btn btn-success btn-lg w-100 sub-button"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
