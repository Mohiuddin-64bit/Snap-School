import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  return (
    <div className="w-full">
      <Helmet>
        <title>Snap School | Payment</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements> 
    </div>
  );
};

export default Payment;
