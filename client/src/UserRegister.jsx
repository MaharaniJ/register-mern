import React, { useRef } from 'react';
import axios from 'axios';

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      name: name,
      email: email,
      password: password
    };

    axios
      .post('http://localhost:5000/register', data)
      .then((res) => {
        console.log(res);
        // Reset input fields
        nameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              ref={nameRef}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success mb-3">
            Register
          </button>
          <p>Already have an account?</p>
          <button type="submit" className="btn btn-primary mb-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
