import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server"; 
import {stripe} from "../../libs/stripe";
import { absoluteUrl } from "../../libs/utils";
import getReservations from "@/app/actions/getReservations"; 

const settingsUrl = absoluteUrl("/settings");

export async function GET() {

  try {

    const user = await getCurrentUser();
      const userId = user?.id;  
      
      const reservation = await getReservations({ userId: userId }); 

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const email = user.email || undefined;

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      // cancel_url: "http://localhost:3000/listings/65cfaefe470524964d2c6f0e",
      payment_method_types: ["card"],
      mode: "payment",
      billing_address_collection: "auto", 
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Airbnb Payments",
              description: "Make your Trip Amazing" 
            },
            unit_amount: (reservation[0].totalPrice) * 100,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    })
    // console.log("Stripe Session: ", JSON.stringify({ url: stripeSession.url }));
    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    // console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
