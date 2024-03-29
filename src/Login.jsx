import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user_id", response.data.user_id);
        event.target.reset();
        window.location.href = "/prayers"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="login-container">
      <div>
        <h1 className="d-flex justify-content-center pt-3">Login</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className="login-form d-flex justify-content-center border border-dark">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 mx-5">
              <input className="text-box" name="email" type="email" placeholder="Email" />
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <input className="text-box" name="password" type="password" placeholder="Password" />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button type="submit" className="px-2 py-1 mb-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
