import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialSign from "../Shared/SocialSign/SocialSign";
import { Navigate } from "react-router-dom";

const Login = () => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full  mx-auto p-8 border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-blue-600 text-white"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <SocialSign></SocialSign>
      </div>
    </div>
  );
};

export default Login;
