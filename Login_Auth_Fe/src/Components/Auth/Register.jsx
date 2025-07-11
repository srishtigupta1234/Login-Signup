import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import './Auth.css';


const Register = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const submitCall = async(data)=>{
        console.log(data); 
        try{
            const response = await axios.post("http://localhost:3000/api/auth/register",data);
            if(response.status==201){
                alert('user registered successfully');
            }
        }catch(e){
            console.log(e);   
        }
    }

   return (
    <div className="form-wrapper">
      <form className="signup-form" onSubmit={handleSubmit(submitCall)}>
        <h2>Create an Account</h2>

        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters"
              }
            })}
          />
          {errors.name && <span className="error-text">{errors.name.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            type="tel"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid mobile number (10 digits)"
              }
            })}
          />
          {errors.mobile && <span className="error-text">{errors.mobile.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          {errors.password && <span className="error-text">{errors.password.message}</span>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register