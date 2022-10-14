import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import stripeST from "./stripe.module.css";
import StripePayBTNLoader from "./StripePayBTNLoader";
import { envCLientInfo } from "../../../utils/envCLientInitializer";

const CheckoutForm = ({amount,package_id}) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [message, setMessage] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
  
    React.useEffect(() => {
      if (!stripe) {
        return;
      }
  
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );
  
      if (!clientSecret) {
        return;
      }
  
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        console.log(paymentIntent,"Afer payment req complete");
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
    }, [stripe]);
   
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      setIsLoading(true);
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${envCLientInfo.NEXT_PUBLIC_FRONTEND_BASE_URL}/payment/${package_id}/confirm`,
        },
      });
  
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
  
      setIsLoading(false);
    };
    
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <div>
            <button className={`${stripeST.pay_btn}`} disabled={isLoading || !stripe || !elements} id="submit">
              <span  id="button-text">
                {isLoading ? <StripePayBTNLoader /> : `Pay $${amount} now`}
              </span>
            </button>
          </div>
          {/* Show any error or success messages */}
          {message && <div style={{textAlign:"center", color:"red", marginTop:"10px"}} id="payment-message">{message}</div>}
      </form>
    );
};

export default CheckoutForm;