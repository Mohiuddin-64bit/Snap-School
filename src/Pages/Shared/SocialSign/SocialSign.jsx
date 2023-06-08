import { FcGoogle } from "react-icons/fc";

const SocialSign = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button className="btn">
          <FcGoogle></FcGoogle>Sign With Google
        </button>
      </div>
    </div>
  );
};

export default SocialSign;
