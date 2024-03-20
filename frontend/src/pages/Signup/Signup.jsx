import axios from "axios";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  // const dispatch=useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleEmail = (e) => {
    setUser({
      ...user, email: e.target.value
    })
  }
  const handlePassword = (e) => {
    setUser({
      ...user, password: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password.length <= 6) {
      alert("Weak password")
      return;
    }
    axios.post("http://localhost:3002/account/signup", user, { withCredentials: true }).then((result) => {
      // dispatch({type:"AUTH_ON"});
      navigate("/");
      window.location.reload();

    }).catch(err => console.log("error"))

  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h5 className="mb-4">Sign Up</h5>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" onChange={handleEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" onChange={handlePassword} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>

  )
}


