import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="signup-container">
      <h1 className="d-flex justify-content-center pt-3">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="signup-form d-flex justify-content-center border border-dark">
        <form onSubmit={handleSubmit}>
          <div className="mt-4 mx-5">
            <input name="name" type="text" placeholder="First Name" />
          </div>
          <div className="mt-2 mx-5">
            <input name="name" type="text" placeholder="Last Name" />
          </div>
          <div className="mt-2 mx-5">
            <input name="email" type="email" placeholder="Email" />
          </div>
          <div className="mt-2 mx-5">
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div className="mt-2 mx-5">
            <input name="password_confirmation" type="password" placeholder="Password confirmation" />
          </div>
          <div className="d-flex justify-content-center mt-2 mb-4">
            <button type="submit" className="px-2 py-1">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
