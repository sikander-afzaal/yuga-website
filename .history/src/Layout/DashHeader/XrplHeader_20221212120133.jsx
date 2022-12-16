import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/professor-text.png";
import connect1 from "../../Assets/connect1.svg";
import connect2 from "../../Assets/connect2.svg";
import connect3 from "../../Assets/connect3.svg";
import connect4 from "../../Assets/connect4.gif";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected, walletConnect } from "./connectors";

function XrplHeader({ func }) {
  const [modal, setModal] = useState(false);
  const { account, activate, active } = useWeb3React();

  async function Connect() {
    try {
      await activate(injected);
      setModal(false);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function WalletConnect() {
    try {
      await activate(walletConnect);
      setModal(false);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="header">
      {/* modal ------------ */}
      <>
        <div
          onClick={() => setModal(false)}
          className={`overlay-modal-connect ${
            modal ? "open-modal-connect" : ""
          }`}
        ></div>
        <div className={`modal-connect ${modal ? "open-modal-connect" : ""}`}>
          <div className="modal-box">
            <div className="modal-cont-connect" onClick={Connect}>
              <img src={connect1} alt="" />
              <h2>MetaMask</h2>
              <p>Connect to your MetaMask Wallet</p>
            </div>
          </div>
          <div className="modal-box">
            <div className="modal-cont-connect" onClick={WalletConnect}>
              <img src={connect2} alt="" />
              <h2>WalletConnect</h2>
              <p>Scan with WalletConnect to connect</p>
            </div>
          </div>
          <div className="modal-box">
            <div className="modal-cont-connect">
              <img src={connect3} alt="" />
              <h2>Coinbase Wallet</h2>
              <p>Scan with CoinBase Wallet to connect</p>
            </div>
          </div>
          <div className="modal-box">
            <div className="modal-cont-connect">
              <img src={connect4} alt="" />
              <h2>Crypto.com Defi Wallet</h2>
              <p>Connect to your Crypto.com Defi Wallet</p>
            </div>
          </div>
        </div>
      </>
      {/* modal end------------ */}
      <div className="left-header">
        <FontAwesomeIcon
          onClick={() => func(true)}
          icon={faBars}
          className="mobile"
        />
        <Link to="/dashboard">
          {" "}
          <img src={logo} className={"logo"} alt="" />
        </Link>
      </div>
      <div className="right-header">
        {active ? <div className="link2"><p className='cp'>Connected</p></div> :<div onClick={() => setModal(true)} className="link2">
          <p className="cp">Connect Wallet</p>
        </div>}
      </div>
    </div>
  );
}

export default XrplHeader;
