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
const xrpl = require("xrpl");
const { XummPkce } = require("xumm-oauth2-pkce");


function XrplHeader({ func }) {
  const xumm = new XummPkce("b190ee09-d00e-4b35-8107-a6c78b5f939c", {
    implicit: true,
  });

  const [modal, setModal] = useState(false);
  const { account, activate, active } = useWeb3React();


  return (
    <div className="header">
      <div className="left-header">
        <FontAwesomeIcon
          onClick={() => func(true)}
          icon={faBars}
          className="mobile"
        />
        <Link to="/xrplTest">
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
