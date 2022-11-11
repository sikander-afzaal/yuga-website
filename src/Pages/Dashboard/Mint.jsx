import React from "react";
import "./styles/Mint.css";
import AnimatedPage from "../../Components/AnimatedPage";
// import prof from "../../Assets/prof.png";
import thread from "../../Assets/thread.png";
import text from "../../Assets/professor-text.png";
import board from "../../Assets/board.png";
import gif from "../../Assets/gif.gif";

const Mint = () => {
  return (
    <AnimatedPage>
      <div className="mint-page">
        <div className="gif-div">
          <img src={thread} className="wire" alt="" />
          <img src={gif} className="gif" alt="" />
        </div>
        <img src={board} alt="" className="mint-board" />
        {/* <img src={prof} alt="" className="prof" /> */}
        <img src={text} alt="" className="prof-text" />
      </div>
    </AnimatedPage>
  );
};

export default Mint;
