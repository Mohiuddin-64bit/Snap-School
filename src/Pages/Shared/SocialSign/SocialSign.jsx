import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialSign = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSign = () => {
    googleSignIn()
      .then(() => {})
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
