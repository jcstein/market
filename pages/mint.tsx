import React, { useState } from "react";
import Container from "../components/Container/Container";

export default function Mint() {
  return (
    <Container maxWidth="lg">
    <h1>Mint NFTs</h1>
    <p>Connect your wallet mint an NFT below.</p>
    <p>This is a will be a connection to <code>https://ipfs.thirdwebcdn.com</code>, separate from <code>https://celestia-market.vercel.app</code>.</p>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc721.html?contract=0x4a87e1E9918E3b96d75E3A0c27cfE1a89e8d4102&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D&theme=dark"
        width="600px"
        height="600px"
        frameborder="0"
      ></iframe>
    </div>
  </Container>
  );
}
