import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { submitAdminData } from "./js/submitAdminData";

export default function AdminForm(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAdmin === true) {
      navigate("/volunteer-details");
    }
  });

  const email = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    submitAdminData(
      email.current.value,
      password.current.value,
      props.setIsAdmin
    );
  };
  return (
    <div className="container my-5">
      <h2 className="text-center">Administrator</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={password}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
