import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Modal.css";
import img from "../Assets/img.png";
import logo from "../Assets/logo.png";
function Modal() {
  return (
    <div className="modal-cont">
      <div className="modal">
        <h1>Ready to launch your own NFT project for just $500</h1>
        <h2>Then this is for you</h2>
        <p>If you have a million dollar idea and you cant wait to launch</p>
        <p>
          You know you can do way better than other NFT projects. <br />
          You may have an edge over others to be next BAYC <br />
          You are ready to be a metapreneur
        </p>
        <div className="row-modal">
          <a href="https://t.me/wagmilabz" target={"blank"} className="col">
            <h3 style={{ color: "#229ED9" }}>
              <FontAwesomeIcon icon={faTelegram} />
              Telegram
            </h3>
            <div className="box">
              <img src={logo} alt="" />
              <div className="right-box">
                <h4>Wagmi Lab</h4>
                <p>
                  Introducing brands and there communities to the world of
                  digital collectibles and Nfts, through web3 and the metaverse
                </p>
                <h6 style={{ color: "#229ED9" }}>
                  <FontAwesomeIcon icon={faTelegram} />
                  Telegram
                </h6>
              </div>
            </div>
          </a>
          <a
            href="https://discord.com/invite/gaSwDctDYV"
            target={"blank"}
            className="col"
          >
            <h3 style={{ color: " #7289DA" }}>
              <FontAwesomeIcon icon={faDiscord} />
              Discord
            </h3>
            <div className="box">
              <img src={img} alt="" />
              <div className="right-box">
                <h4>Join the Wagmi Lab discord server</h4>
                <p>
                  Check out the WAGMI LABZ community on Discord - hang out with
                  44 other members and enjoy free voice and text...
                </p>{" "}
                <h6 style={{ color: " #7289DA" }}>
                  <FontAwesomeIcon icon={faDiscord} />
                  Discord
                </h6>
              </div>
            </div>
          </a>
        </div>
        <h2>JOIN EITHER LINK ABOVE</h2>
        <p>To launch your own NFT project or to see more infor</p>
        <p>
          What will you get? <br />
          2500 NFT art of your choice <br />
          Website <br />
          Mint button <br />
          Smart contract <br />
          1 year assistance <br />
          A community of investors <br />
          And much much more
        </p>
        <div className="foot">
          <img src={img} alt="" />
          <div className="text">
            <h5>Wagmi Labz</h5>
            <a target={"blank"} href="https://www.wagmilabz.com">
              www.wagmilabz.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
