// Erc721Embed.tsx
import React, { useEffect } from "react";
import { useContract } from "@thirdweb-dev/react";
import { Body } from "../shared/body";
import { ERC721ClaimButton } from "../shared/claim-button-erc721";
import { ContractMetadataPage } from "../shared/contract-metadata-page";
import { Footer } from "../shared/footer";
import { Header } from "../shared/header";

interface Erc721EmbedProps {
  contractAddress: string;
  colorScheme: "light" | "dark";
  primaryColor: string;
}

const Erc721Embed: React.FC<Erc721EmbedProps> = ({
  contractAddress,
  colorScheme,
  primaryColor,
}) => {
  const { contract } = useContract(contractAddress);

  useEffect(() => {
    // setColorMode(colorScheme);
  }, [colorScheme]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0px 1px 1px rgba(0,0,0,0.1)",
        border: "1px solid",
        borderColor: "borderColor",
        backgroundColor: "backgroundHighlight",
      }}
    >
      <Header primaryColor={primaryColor} colorScheme={colorScheme} />
      <Body>
        <ContractMetadataPage contract={contract}>
          <ERC721ClaimButton
            contract={contract}
            colorScheme={colorScheme}
            primaryColor={primaryColor}
          />
        </ContractMetadataPage>
      </Body>
      <Footer />
    </div>
  );
};

export default Erc721Embed;
