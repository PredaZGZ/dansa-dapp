import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import validateToken from "./Helpers/validateToken";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const token = localStorage.getItem('token');
  try {
    validateToken(token).then((res)=> {
      if (res.status === 200) {
        navigate('/dashboard');
      }})
  } catch (error) {}
  

  function sendLoginRequest() {
    setErrorMsg("");
    const reqBody = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/auth/login", reqBody)
      .then((data) => {
        if (data) {
          localStorage.setItem('token', data.data.data.token);
          navigate("/dashboard");
          }
      })
      .catch(()=>{setErrorMsg("Something went wrong")});
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      sendLoginRequest();
    }
    return(
      
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <h3 className="text-2xl font-bold text-center">DANSA</h3>
      {errorMsg && 
        <h4 className="text-2xl font-bold text-center">{errorMsg}</h4>}
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div>
            <label className="block" htmlFor="email">
              Email
              <label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </label>
            </label>
          </div>
          <div className="mt-4">
            <label className="block">
              Password
              <label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </label>
            </label>
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Login
            </button>
            <a href="" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;
