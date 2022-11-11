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
function Header({ func }) {
  const [modal, setModal] = useState(false);
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
            <div className="modal-cont-connect">
              <img src={connect1} alt="" />
              <h2>MetaMask</h2>
              <p>Connect to your MetaMask Wallet</p>
            </div>
          </div>
          <div className="modal-box">
            <div className="modal-cont-connect">
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
        <img src={logo} className={"logo"} alt="" />
      </div>
      <div className="right-header">
        {/* <div className="link drop">
          <div className="top-link">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>$OP $0.0771 USD</p>
          </div>

          <div className="dropdown">
            <a
              target={"blank"}
              href="https://pancakeswap.finance/swap?outputCurrency=0xd87fce0d8d6d8a38a2d808081fcfa79e78ba5a4a"
              className="drop-link"
            >
              <p>Buy on Pancake Swap</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <div className="drop-link">
              <p>Chart</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div> */}
        <div onClick={() => setModal(true)} className="link2">
          <p className="cp">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
