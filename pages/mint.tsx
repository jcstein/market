import React from "react";
import Container from "../components/Container/Container";
import {
  Web3Button,
  ThirdwebNftMedia,
  useNFT,
  useContract,
  useMetadata
} from "@thirdweb-dev/react";

// TODO: add number minted/total supply
interface CustomContractMetadata {
  name: string;
  description?: string;
  image?: any;
  external_link?: string;
}

function NFTDisplay({ contractAddress }: { contractAddress: string }) {
  const { contract } = useContract(contractAddress);
  const { data: nft, isLoading, error } = useNFT(contract, "0");
  const { data: metadata, isLoading: metadataIsLoading } = useMetadata(contract) as {
    data: CustomContractMetadata | undefined;
    isLoading: boolean;
    error: any;
  };

  if (isLoading) return <div style={{ textAlign: "center" }}>⏳ loading...</div>;
  if (error || !nft) return <div style={{ textAlign: "center" }}>NFT not found</div>;
  const openseaLink = `https://testnets.opensea.io/assets?search[query]=${contractAddress}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1><code>{metadata?.name}</code></h1>
      <ThirdwebNftMedia metadata={nft.metadata} controls={true} />
      <br />
      <Web3Button
        contractAddress={contractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onError={(error) => alert("Claim limit reached!")}
        theme="dark"
      >
        Claim an NFT from the {metadata?.name} collection!
      </Web3Button>
      <br />
      {metadataIsLoading ? (
        <p style={{ textAlign: "center" }}>Loading description...</p>
      ) : (
        <code style={{ textAlign: "center" }}>{metadata?.description || "No description available"}</code>
      )}
      <br />
      <a href={openseaLink} target="_blank" rel="noopener noreferrer">
        <code>Click to view {metadata?.name} collection on OpenSea 🌊</code>
      </a>
    </div>
  );
}

export default function Mint() {
  return (
    <Container maxWidth="lg">
      <h1>Mint NFTs</h1>
      <p>
        Connect your wallet mint an NFT from a featured collection below.
      </p>
      <NFTDisplay contractAddress="0xE779611601CAF368A2e82ef115f466061Cd11971" />
      <NFTDisplay contractAddress="0x7e9a8Bc504ACBED631ab7a7E8216FCe0156c9a3c" />
      <NFTDisplay contractAddress="0xD6C1f28eC5b025a618fd3733d7e6Af329a19508A" />
      <NFTDisplay contractAddress="0x4a87e1E9918E3b96d75E3A0c27cfE1a89e8d4102" />
      <NFTDisplay contractAddress="0x4290CeA136B5a0c4c96D242255797f9546dCC88f" />
    </Container>
  );
}
