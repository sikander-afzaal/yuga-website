import React from "react";
import "./styles/Mint.css";
import AnimatedPage from "../../Components/AnimatedPage";
import thread from "../../Assets/thread.png";
import text from "../../Assets/professor-text.png";
import board from "../../Assets/board.png";
import arrow from "../../Assets/arrow.png";
import prof from "../../Assets/prof.gif";
import gif from "../../Assets/gif.gif";
import shibaProf from "../../Assets/ShibaC.png";
import { useState, useEffect } from "react";
import axios from "axios";
import XrplHeader from "../../Layout/DashHeader/XrplHeader";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import SyncLoader from "react-spinners/SyncLoader";
const { XummPkce } = require("xumm-oauth2-pkce");

const Xrpl = () => {
  const xumm = new XummPkce("b190ee09-d00e-4b35-8107-a6c78b5f939c", {
    implicit: true,
  });
  const { promiseInProgress } = usePromiseTracker();

  const mainWeb = "https://xrpl-professorss-backend.herokuapp.com/";

  const checkWalletUrl = "http://localhost:3001/" + "xumm/wallet/";
  const checkCodeUrl = "http://localhost:3001/" + "xumm/code/";
  const mintCodeUrl = "http://localhost:3001/" + "xumm/mint";
  const mintedNftsUrl = "http://localhost:3001/" + "xumm/minted"
  const accountStatusUrl = "http://localhost:3001/" + "xumm/accountStatus/"
  const claimNftUrl = "http://localhost:3001/" + "xumm/acceptMint"

  // const checkWalletUrl = mainWeb + 'xumm/wallet/'
  // const checkCodeUrl = mainWeb + 'xumm/code/'
  // const mintCodeUrl = mainWeb + 'xumm/mint'

  const [minted, setMinted] = useState("0");
  const [mintCode, setCode] = useState("");
  const [walletAddress, setWalletAddres] = useState("");
  const [mintingProgress1, setMintingProgress1] = useState(true);
  const [mintingProgress2, setMintingProgress2] = useState(false);
  const [mintingProgress3, setMintingProgress3] = useState(false);


  useEffect(() => {
      axios.get(mintedNftsUrl).then((response) => {
        setMinted(response.data.message)
      })
  },[])

  useEffect(() => {
    if (walletAddress != "") {
      axios.get(accountStatusUrl + walletAddress).then((response) => {
        if (response.data.message == "User didn't mint yet") {
          setMintingProgress1(true);
          setMintingProgress2(false);
          setMintingProgress3(false);
        }
        if (response.data.message == "User minted but didn't claim yet"){
          setMintingProgress1(false);
          setMintingProgress2(true);
          setMintingProgress3(false);
        } if (response.data.message == "User minted and claimed") {
          setMintingProgress1(false);
          setMintingProgress2(false);
          setMintingProgress3(true);
        }
      })
    }
  },[walletAddress])

  // Xumm events start
  xumm.on("error", (error) => {
    console.log("error", error);
  });

  xumm.on("success", async () => {
    const state = await xumm.state();
    console.log("test")
    setWalletAddres(state.me.account);
  });

  xumm.on("retrieved", async () => {
    const state = await xumm.state();
    console.log("test")
    setWalletAddres(state.me.account);
  });
  //Xumm events end

  async function mintXrp() {
    let codeUsed = false;
    let walletUsed = false;
    console.log(walletAddress)
    if (walletAddress == "") {
      window.alert("Connect Wallet First");
      return;
    }

    // Check if wallet minted
    await axios
      .get(checkWalletUrl + walletAddress)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        walletUsed = true;
        window.alert("Only One Wallet per Nft!");
      });

    if (walletUsed) return;

    //Check if Mint Code used
    if (mintCode == "") {
      window.alert("Input Mint Code");
      return;
    }
    await axios.get(checkCodeUrl + mintCode).then((response) => {
      console.log(response.status)
    }).catch((error) => {
      codeUsed = true
      window.alert("Invalid Minting Code");
    });

    if (codeUsed) return;

    //Mint
    trackPromise(
    axios
      .post(mintCodeUrl, { walletAddress: walletAddress, mintCode: mintCode })
      .then((response) => {
        if (response.status == 200) {
          setMintingProgress1(false);
          setMintingProgress2(true);
          setMintingProgress3(false);
          window.alert("Minted Succesfully, Click Claim Professor Button to receive NFT")
        }
      }));
  }

  async function claimXrp() {
    axios.post(claimNftUrl, {walletAddress: walletAddress}).then((response) => {
      if (response.status == 200) {
        window.alert("Verify wallet transaction to claim your masked professor");
        setMintingProgress1(false);
        setMintingProgress2(false);
        setMintingProgress3(true);
      }
    })
  }

  return (
    <AnimatedPage>
      <XrplHeader />
      <div className="mint-page">
        <img src={shibaProf} className="prof" alt="" />
        <div className="gif-div">
          <img src={thread} className="wire" alt="" />
          <a href="https://t.me/LabzProfessorsBot">
            <img src={gif} className="gif" alt="" />
          </a>
          <p className="cp">
            !!! NO CODE !!! CLICK THE ALPHA BUTTON TO GET ONE FREE !!!!!
          </p>
        </div>
        <div className="mint-div">
          <div className="arrow-div">
            <div className="arrow-line"></div>
            <div className="arrow-head"></div>
          </div>
          {mintingProgress1 ? <>{(promiseInProgress === true) ? <div className="loader"><SyncLoader color="#36d7b7" /></div> : <div onClick={mintXrp} to={"/dashboard"} className="mint-btn"><img src={board} alt="" /><p className="btn-text cp">Mint Professor</p></div>}</> : <></>}
          {mintingProgress2 ? <div onClick={claimXrp} to={"/dashboard"} className="mint-btn"><img src={board} alt="" /><p className="btn-text cp">Claim Professor</p></div> : <></>}
          {mintingProgress3 ? <div to={"/dashboard"} className="mint-btn"><img src={board} alt="" /><p className="btn-text cp">Already Claimed</p></div> : <></>}
          <div className="amount-div">
            <h2 className="cp">{minted}/10,000</h2>
            <input
              className="cp"
              type="text"
              onChange={(e) => setCode(e.target.value)}
            />
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

export default Xrpl;
