import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/MaskedShibaLogo.png";
import { Link } from "react-router-dom";
import { XummPkce } from "xumm-oauth2-pkce";


function XrplHeader({ func }) {
  const xumm = new XummPkce("0f10f84e-71f1-490f-85f0-8ec4fcd45fbf");

  const [ modal, setModal ] = useState(false);
  const [ walletAddress, setWalletAddres ] = useState('');
  const [isLogged, setIsLogged ] = useState(false);

  async function connect() {
    xumm.authorize().then(setWalletAddres(state.me.account)).catch((e) => console.log("e", e));
  }

  async function logout() {
    xumm.logout();
    setWalletAddres('')
    setIsLogged(false)
  }

  xumm.on("success", async () => {
    setIsLogged(true)
  });

  xumm.on("retrieved", async () => {
    setIsLogged(true)
  });

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
        {isLogged ? <div className="link2"><p className='cp'>Connected</p></div> :<div onClick={connect} className="link2">
          <p className="cp">Connect Wallet</p>
        </div>}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default XrplHeader;
