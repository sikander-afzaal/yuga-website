import React from "react";
import AnimatedPage from "../../Components/AnimatedPage";
import "./styles/MyNft.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { rpcUrl, abi, contractAddress } from "./contract";
import { useWeb3React } from "@web3-react/core";

const MyNft = () => {
  const { account, active } = useWeb3React();

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
    console.log(tokenIds[0])

    // console.log(tokenIds)
    // for (let a = 0; a < tokenIds.length; a++) {
    //    let response = await fetch("https://labz-professors-api.herokuapp.com/" + toString(tokenIds[a]));
    //    let reponseJson = await response.json()
    //    console.log(reponseJson)
    // }
  }

  useEffect(() => {
    if (active) {
      showNft();
    }
  }, [account]);

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
