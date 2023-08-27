import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className='d-flex justify-content-center' style={{position:"relative",top:"10em"}}>
        <div className='border border-2 rounded p-3 bg-warning-subtle' style={{width:"25em"}} >
          <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-between h4'>
              <span>Login</span>
              <span><Link to={"/"} className='text-decoration-none text-dark'>x</Link></span>
            </div>
            <div className='text-center'>
              <img src="./assets/forlogin.jpg" alt="" height={"200em"} style={{}}/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder='Email' className='form-control' value={email} onChange={handleOnChange}/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder='Password' className='form-control' value={password} onChange={handleOnChange}/>
            </div>
            <button type="submit" className='form-control mt-3 btn btn-outline-danger'>Log in</button>
            <div className='mt-2'>Don't have an account? create one <Link to={"/signup"} className='text-decoration-none text-danger'>Sign up</Link></div>
          </form>
        </div>
        <ToastContainer />
        </div>
    </div>
  );
};

export default Login;
