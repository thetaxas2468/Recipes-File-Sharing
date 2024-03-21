import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeEmail } from "../../store";
import Cookies from "js-cookie";


export default function Signin() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(()=>{
    if(Cookies.get("user")){
      navigate("/");
      window.location.reload();
    }
  },[]);

  const handleEmail = (e) => {
    setUser(
      user ? { ...user, email: e.target.value } : { email: e.target.value, password: "" }
    )
  }
  const handlePassword = (e) => {
    setUser(
      user ? { ...user, password: e.target.value } : { email: "", password: e.target.value }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/account/signin", user, { withCredentials: true }).then((result) => {
      if (result.data.status === "error") {
        alert(result.data.statusMessage)
      }
      else {
        dispatch(changeEmail(user.email))
        navigate("/");
        window.location.reload();
      }
    }).catch(err => alert("error has been occured"))

  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h5 className="mb-4">Sign In</h5>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" onChange={handleEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" onChange={handlePassword} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Log in</button>
        </div>
      </form>
    </div>
  )
}


