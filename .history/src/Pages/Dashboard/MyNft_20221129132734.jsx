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
  const [tokensOwned, setTokensOwned] = useState('0')
  const proffData = require("../lastMeta.json");

  async function showNft() {
    const web3 = new Web3(rpcUrl);
    const contract = new web3.eth.Contract(abi, contractAddress);

    const tokenBalance = await contract.methods.balanceOf(account).call();
    if (tokenBalance < 1) {
      return;
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
    <h1 className="cp">
      CONNECT WALLET <br /> To see your collection
    </h1>
  );

  const connectedHtml = (
    <>
    <h1 className="cp">You have {tokensOwned} Professors</h1>
    </>
  );

  return (
    <AnimatedPage>
      <div className="my-nft">
        {active ? connectedHtml : notConnectedHtml}
      </div>
    </AnimatedPage>
  );
};

export default MyNft;
