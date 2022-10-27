import React, { useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { envCLientInfo } from "../../../utils/envCLientInitializer";
import stripeST from "./stripe.module.css";
import card_skeleton from "../../../assets/card/credit_card_skeleton.gif"
import Image from "next/image";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(envCLientInfo.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripeElement = ({user,amount,duration,pay_card,package_id}) => {
    const [clientSecret, setClientSecret] = React.useState("");
    
    const purchaseInfo = useMemo(()=>{
      return {
        amount,
        duration,
        method:"card",
        package_id: package_id,
        card: pay_card,
        user_id: user._id,
      }
    },[amount,duration,package_id,pay_card,user._id])
    console.log(clientSecret);

  React.useEffect(() => {
    // use controller to cancel async operation if dependency changes
    const abortController = new AbortController()
    // Create PaymentIntent as soon as the page loads
      fetch("/api/v1/payment/methods/stripe", {
        method: "POST",
        signal: abortController.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...purchaseInfo }),
      })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch(err=>console.log(err))
      // cleanup the hook
      return ()=>{abortController.abort()}
  }, [purchaseInfo]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  
  
  return (
    <div className={stripeST.paycard_container}>
        <div className={stripeST.paycard_container_wrapper}>
          {
            clientSecret 
              ? <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm amount={amount} package_id={package_id}/>
                </Elements>
              : <Image src={card_skeleton.src} width={480} height={250} objectFit='fill' alt="Credit Card Loading..."></Image>
          }
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default StripeElement;