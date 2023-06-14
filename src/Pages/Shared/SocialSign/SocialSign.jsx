import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialSign = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(result.user);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          role: 'student'
        };
        axios.post("https://snap-school-server-kappa.vercel.app/users", saveUser).then(() => {
          Swal.fire("SignUp!", "Your Account Created Successfully", "success");
          navigate("/");
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button className="btn" onClick={handleGoogleSign}>
          <FcGoogle></FcGoogle>Sign With Google
        </button>
      </div>
    </div>
  );
};

export default SocialSign;
