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
import Web3 from 'web3/dist/web3.min.js';
import { rpcUrl, abi, contractAddress } from './contract';
import { useWeb3React } from "@web3-react/core";

const Mint = () => {
  const [minted, setMinted] = useState("0");
  const {account} = useWeb3React();

  async function howManyMinted() {
    const web3 = new Web3(rpcUrl);
    const contract = new web3.eth.Contract(abi, contractAddress);

    const howMany = await contract.methods.totalSupply().call()
    setMinted(howMany)
  }

  useEffect(() => {
    howManyMinted();
  }, [])

  function checkAcc() {
    console.log(account)
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
          <div onClick={checkAcc} to={"/dashboard"} className="mint-btn">
            <img src={board} alt="" />
            <p className="btn-text cp">Mint Professor</p>
          </div>
          <div className="amount-div">
            <h2 className="cp">{minted}/10,000</h2>
            <input className="cp" type="text" />
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
