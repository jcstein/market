import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useNFT,
} from "@thirdweb-dev/react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import { EDITION_ADDRESS } from "../constants/addresses";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const connectWithMagic = useMagic();
  const [email, setEmail] = useState<string>("");
  const { contract } = useContract(EDITION_ADDRESS, "edition");
  const { data: nft } = useNFT(contract, 0);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  const appearance: Appearance = {
    theme: "night",
    labels: "above",
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    if (address) {
      fetch("/api/stripe_intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.client_secret);
        });
    }
  }, [address]);

  return (
    <div className={styles.container}>
      {address ? (
        <>
          <p>You are signed in as: {address}</p>
          <div className={styles.nftCard}>
            {nft?.metadata && (
              <ThirdwebNftMedia
                metadata={nft?.metadata}
                style={{ width: 200, height: 200 }}
              />
            )}
            <h2>{nft?.metadata?.name}</h2>
            <p>{nft?.metadata?.description}</p>
            <p>Price: 100$</p>
          </div>
          {clientSecret && (
            <Elements options={options} stripe={stripe}>
              <Form />
            </Elements>
          )}
        </>
      ) : (
        <>
          <h2 style={{ fontSize: "1.3rem" }}>Login With Email</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              connectWithMagic({ email });
            }}
            style={{
              width: 500,
              maxWidth: "90vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className={styles.textInput}
              style={{ width: "90%", marginBottom: 0 }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={styles.mainButton}>Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Home;
