import React from "react";
import AnimatedPage from "../../Components/AnimatedPage";
import "./styles/MyNft.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { rpcUrl, abi, contractAddress } from "./contract";
import { useWeb3React } from "@web3-react/core";
import proData from "../lastMeta.json";

const MyNft = () => {
  const { account, active } = useWeb3React();
  const [tokensOwned, setTokensOwned] = useState("0");
  const proffData = require("../lastMeta.json");

  async function showNft() {
    const web3 = new Web3(rpcUrl);
    const contract = new web3.eth.Contract(abi, contractAddress);

    const tokenBalance = await contract.methods.balanceOf(account).call();
    if (tokenBalance < 1) {
      return;
    } else {
      setTokensOwned(tokenBalance);
    }

    let tokenIds = [];

    for (let i = 0; i < tokenBalance; i++) {
      let tokenOwned = await contract.methods
        .tokenOfOwnerByIndex(account, i)
        .call();
      tokenIds.push(tokenOwned);
    }
  }

  useEffect(() => {
    if (active) {
      showNft();
    }
  }, [account]);

  const notConnectedHtml = (
    <div className="my-nft">
      <h1 className="cp">
        CONNECT WALLET <br /> To see your collection
      </h1>
    </div>
  );

  const connectedHtml = (
    <>
      <div className="my-nft-c">
        <h1 className="cp">You have {tokensOwned} Professor(s)</h1>
        <div className="prof-grid">
          <div className="single-prof cp">
            <img src="https://ipfs.io/ipfs/Qmb8nMUyxxgqnY5FPdudj1KZNLKTibSsfLLcKZXQtkmzaA" />
            <p>TokenId: 1</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <AnimatedPage>{active ? connectedHtml : notConnectedHtml}</AnimatedPage>
  );
};

export default MyNft;
