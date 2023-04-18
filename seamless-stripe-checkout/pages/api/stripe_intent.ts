import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { address } = req.body;

  const amount = 10000;

  try {
    const payment_intent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      description: "Payment description",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: { address },
    });

    return res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    return res.status(500).json({ statusCode: 500, message: errorMessage });
  }
};

export default handler;
