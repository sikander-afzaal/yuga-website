import React from "react";
import "./styles/Mint.css";
import AnimatedPage from "../../Components/AnimatedPage";
// import prof from "../../Assets/prof.png";
import thread from "../../Assets/thread.png";
import text from "../../Assets/professor-text.png";
import board from "../../Assets/board.png";
import arrow from "../../Assets/arrow.png";
import gif from "../../Assets/gif.gif";

const Mint = () => {
  return (
    <AnimatedPage>
      <div className="mint-page">
        <div className="gif-div">
          <img src={thread} className="wire" alt="" />
          <img src={gif} className="gif" alt="" />
        </div>
        {/* <div className="code-text">
          <p>!!! NO CODE !!! CLICK THE ALPHA BUTTON TO GET ONE FREE !!!!!</p>
          <img src={arrow} alt="" />
        </div> */}
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
        <img src={board} alt="" className="mint-board" />
        {/* <img src={prof} alt="" className="prof" /> */}
        <img src={text} alt="" className="prof-text" />
      </div>
    </AnimatedPage>
  );
};

export default Mint;
