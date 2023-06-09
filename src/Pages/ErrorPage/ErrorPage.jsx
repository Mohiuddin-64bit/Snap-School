import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="w-[700px] mx-auto">
        <img src="https://i.ibb.co/4Ymhjp8/5203299.jpg" alt="" />
      </div>
      <div id="error-page" className="text-center">
        <p className="text-2xl fontbo;">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
