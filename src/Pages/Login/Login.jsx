import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialSign from "../Shared/SocialSign/SocialSign";

const Login = () => {
  const [error, setError] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        reset();
      })
      .catch((error) => setError(error.message));
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
            {showPassword ? (
              <>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="text"
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
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <p
                    onClick={togglePasswordVisibility}
                    className="label-text-alt link link-hover"
                  >
                    Hide Password
                  </p>
                </label>
              </>
            ) : (
              <>
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
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <p
                    onClick={togglePasswordVisibility}
                    className="label-text-alt link link-hover"
                  >
                    Show Password
                  </p>
                </label>
              </>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-blue-600 text-white"
              type="submit"
              value="Login"
            />
          </div>
          <p>
            <span className="text-red-500 text-center my-12">{error}</span>
          </p>
        </form>
        <SocialSign></SocialSign>
      </div>
    </div>
  );
};

export default Login;
