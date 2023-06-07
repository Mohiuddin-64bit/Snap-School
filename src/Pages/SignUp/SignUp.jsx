import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userName = form.name.value;
    const photoURL = form.photoURL.value;

    console.log(password, email);
    // console.log(email, password, userName);
    setError("");
    // createUser(email, password, userName, photoURL)
    //   .then((result) => {
    //     console.log(result.user);
    //     setSuccess("Account Create successfully");
    //   })
    //   .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full  mx-auto p-8 border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="bg-custom-gradient btn" type="submit">
              Registration
            </button>
          </div>
          <div className="divider"></div>
          <div className="flex justify-center mt-5 gap-2">
            <div
              // onClick={signInWithGoogle}
              className="flex items-center cursor-pointer bg-custom-gradient rounded-full p-3"
            >
              <div>
                <button className="btn bg-blue-500 text-white"><FcGoogle></FcGoogle>Sign With Google</button>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-0">
              Already Have an Account?{" "}
              <Link className="text-blue-500 font-bold" to="../login">
                Click Here
              </Link>
            </p>
            <span className="text-green-500 font-bold text-lg">
              <small>{success}</small>
            </span>
            <br />
            <span className="text-red-500 font-bold text-lg">
              <small>{error}</small>
            </span>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default SignUp;
