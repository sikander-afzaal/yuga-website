import React from "react";
import "./styles/Mint.css";
import AnimatedPage from "../../Components/AnimatedPage";
// import prof from "../../Assets/prof.png";
import thread from "../../Assets/thread.png";
import text from "../../Assets/professor-text.png";
import board from "../../Assets/board.png";
import arrow from "../../Assets/arrow.png";
import prof from "../../Assets/prof.gif";
import gif from "../../Assets/gif.gif";
import { useState, useEffect } from "react";
import Web3 from 'web3';
import { rpcUrl, abi, contractAddress } from './contract';
import { useWeb3React } from "@web3-react/core";
import axios from "axios";

const Mint = () => {
  const [minted, setMinted] = useState("0");
  const {account, library, active} = useWeb3React();
  const [code, setCode] = useState("");
  const [bnb, setBnb] = useState("");

  async function howManyMinted() {
    const web3 = new Web3(rpcUrl);
    const contract = new web3.eth.Contract(abi, contractAddress);

    const howMany = await contract.methods.totalSupply().call()
    setMinted(howMany)
  }

  useEffect(() => {
    howManyMinted();
  }, [])


  async function mint() {
    const web3 = new Web3(library);
    const contract = new web3.eth.Contract(abi, contractAddress);

    if (!active) {
      window.alert("Connect Wallet First");
      return;
    }

    let isBlackListed = await contract.methods.alreadyMinted(account).call();

    if (isBlackListed) {
      window.alert("Only one wallet per mint");
      console.log(isBlackListed);
      return;
    }

    if (code.length < 5 || code.length > 5) {
      console.log(code.length)
      window.alert("Code must be 5 digits")
      return
    }

    let balance = await web3.eth.getBalance(account)
    balance = web3.eth.utils.fromWei(balance, 'ether')
    console.log(balance)


    
    // axios
    //   .put("https://professors-mint-bot-server.herokuapp.com/mint", {
    //     mint_code: code,
    //     wallet_address: account,
    //   })
    //   .then((response) => {
    //     web3.eth.sendTransaction({
    //       to: "0x9B4888677Fe18897439DA4a69c25CFDf9181F7ff",
    //       from: account,
    //       value: web3.utils.toWei("0.001", "ether"),
    //       gas: 30000
    //     }).then( (tx) => {
    //       console.log(tx)
    //       window.alert("You just minted your free Professor")
    //     });
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     window.alert(error);
    //   });
  }
  

  return (
    <AnimatedPage>
      <div className="mint-page">
        <img src={prof} className="prof" alt="" />
        <div className="gif-div">
          <img src={thread} className="wire" alt="" />
          <img src={gif} className="gif" alt="" />
          <p className="cp">
            !!! NO CODE !!! CLICK THE ALPHA BUTTON TO GET ONE FREE !!!!!
          </p>
        </div>
        <div className="mint-div">
          <div className="arrow-div">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
          </div>
          <div onClick={mint} to={"/dashboard"} className="mint-btn">
            <img src={board} alt="" />
            <p className="btn-text cp">Mint Professor</p>
          </div>
          <div className="amount-div">
            <h2 className="cp">{minted}/10,000</h2>
            <input className="cp" type="text" onChange={(e) => setCode(e.target.value)} />
          </div>
          <div className="input-desc">
            <p className="cp">INPUT MINT CODE FROM TG GROUP HERE</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="list-text">
          <h3 className="cp">FREE MINT FEATURES</h3>
          <ul>
            <li className="cp"> 10,000 Unique Professors</li>
            <li className="cp">
              Free Access To 'LABZ' Tech Builds In Professor AMA Lounge
            </li>
            <li className="cp">Whitelist Spot For Wagmilabz Collections</li>
            <li className="cp">Wagmi Market place access</li>
          </ul>
        </div>
        {/* <img src={prof} alt="" className="prof" /> */}
        <img src={text} alt="" className="prof-text" />
      </div>
    </AnimatedPage>
  );
};

export default Mint;
