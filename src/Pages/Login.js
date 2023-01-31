import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ValidateToken from "../Helpers/validateToken";
import { useDispatch } from "react-redux";
import { setLogin } from "../Slices/AuthSlice";
import Titlebar from "../Components/Titlebar";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmailform] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();

  const token = sessionStorage.getItem('token');
  try {
    ValidateToken(token).then((res)=> {
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
      .then((res) => {
        if (res.status === 200) {
          dispatch(setLogin(res.data));
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
    <div className="flex flex-col h-screen">
      <Titlebar />
      <div className="h-full flex items-center justify-center bg-gray-100">
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
                      onChange={(e) => setEmailform(e.target.value)}
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
                <a href="/" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
