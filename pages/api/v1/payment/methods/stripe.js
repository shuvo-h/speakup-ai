import { envInfo } from "../../../../../server_side/utils/envInitializer";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(envInfo.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};
  
export default async function handler(req, res) {
    console.log("got hit");
    const { items } = req.body;

    // Do it in tryCatch and calculate with DB every doc and then send to stripe for paying

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur",
      automatic_payment_methods: {enabled: true,},  // this will allow all type of payment
      // payment_method_types: ['card'], // this will allow only card payment
      statement_descriptor: 'Custom descriptor',
    });
    
    // store the information here in Database before sending response
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
};