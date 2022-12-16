import React from "react";
import AnimatedPage from "../../Components/AnimatedPage";
import "./styles/MyNft.css";
import { useState, useEffect } from "react";
import Web3 from 'web3';
import { rpcUrl, abi, contractAddress } from './contract';
import { useWeb3React } from "@web3-react/core";

const MyNft = () => {
  const {account, library, active} = useWeb3React();

  async function showNft() {
    const web3 = new Web3(rpcUrl);
    const contract = new web3.eth.Contract(abi, contractAddress);

    const tokenOwned = await contract.methods.tokenOfOwnerByIndex(account, 0).call()
    console.log(tokenOwned)
  }

  useEffect(() => {
    console.log(account)
    showNft()
    console.log()
  }, [account])

  return (
    <AnimatedPage>
      <div className="my-nft">
        <h1 className="cp">
          CONNECT WALLET <br /> To see your collection
        </h1>
      </div>
    </AnimatedPage>
  );
};

export default MyNft;
