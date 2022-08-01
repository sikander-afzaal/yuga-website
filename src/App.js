import { useLayoutEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sine } from "gsap";
import img from "./img.png";
function App() {
  //first section--------------------
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const textSec = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);
  const cardSection = useRef(null);
  const scrollText = useRef(null);
  const parallexCont = useRef(null);
  const joinSec = useRef(null);
  const secondSec = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textSec.current,
        start: "top top",
        scrub: 3,
        end: "bottom bottom",
        pin: textSec.current,
      },
    });
    textTimeline.to(
      [
        line1.current,
        line2.current,
        line3.current,
        line4.current,
        line5.current,
      ],
      {
        y: 0,
        opacity: 1,
        duration: 6,
        stagger: 3,
        ease: Sine.easeOut,
      }
    );
    //second section -------------------------------
    const hiddenWords = document.querySelectorAll(".second-section p span");

    gsap.to(hiddenWords, {
      scrollTrigger: {
        trigger: secondSec.current,
        start: "center 50%",
        end: "bottom bottom",
        scrub: 6,
      },
      opacity: 1,
      stagger: 0.3,
    });
    gsap.to(document.querySelector(".App"), {
      scrollTrigger: {
        trigger: secondSec.current,
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "white",
    });
    //third section -------------------------
    const cardTime = gsap.timeline({
      scrollTrigger: {
        trigger: cardSection.current,
        start: "top 10%",
        end: "bottom bottom",
        scrub: 3,
        pin: cardSection.current,
        pinSpacing: false,
      },
    });
    cardTime
      .to(
        [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ],
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      )
      .to(scrollText.current, { y: 0, opacity: 1 })
      .to(cardSection.current, { x: -2810 });
    //animation changes after 800px ------------------------------------ (third section)
    ScrollTrigger.matchMedia({
      "(max-width: 800px)": () => {
        const cardTime = gsap.timeline({
          scrollTrigger: {
            trigger: cardSection.current,
            start: "top 10%",
            end: "bottom bottom",
            scrub: 3,
            pin: cardSection.current,
            pinSpacing: false,
          },
        });
        cardTime
          .to(
            [
              card1.current,
              card2.current,
              card3.current,
              card4.current,
              card5.current,
            ],
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
            }
          )
          .to(scrollText.current, { y: 0, opacity: 1 })
          .to(cardSection.current, { x: -1810 });
      },
    });
    //fourth section ---------------------------------------------------
    gsap.to(parallexCont.current, {
      scrollTrigger: {
        trigger: parallexCont.current,
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
      },
      yPercent: -70,
    });
    //animation changes after 800px ------------------------------------ (third section)
    ScrollTrigger.matchMedia({
      "(max-width: 800px)": () => {
        gsap.to(parallexCont.current, {
          scrollTrigger: {
            trigger: parallexCont.current,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
          },
          yPercent: -100,
        });
      },
    });
    //join section ------------------------------------------
    const h1 = document.querySelector(".join-h1");
    const btn = document.querySelector(".btn-div");
    const mainApp = document.querySelector(".App");
    gsap.to(mainApp, {
      scrollTrigger: {
        trigger: joinSec.current,
        start: "top top",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "white",
    });
    const lastTime = gsap.timeline({
      scrollTrigger: {
        trigger: joinSec.current,
        start: "top top",
        toggleActions: "play reverse play reverse",
      },
    });
    lastTime.to([h1, btn], { opacity: 1, stagger: 0.5 });
    return () => {
      cardTime.kill();
    };
  }, []);
  return (
    <div className="App">
      <div className="first"></div>
      <div ref={textSec} className="text-section">
        <h1 ref={line1}>Shaping Web3</h1>
        <h1 ref={line2}>Through</h1>
        <h1 ref={line3}>StoryTelling,</h1>
        <h1 ref={line4}>Experiences,</h1>
        <h1 ref={line5}>and community.</h1>
      </div>
      <div ref={secondSec} className="second-section">
        <p>
          We <span>believe</span> that the <span>potential</span> of web3 can be{" "}
          <span>realized</span> when we start with <span>imagination</span>, not{" "}
          <span>limitations</span>. No borders, no rulers, just{" "}
          <span>people</span> making cool shit,
          <span>together</span>. In the <span>Yugaverse</span>, fans and{" "}
          <span>players</span> are owners and <span>creators</span>, and in the
          game of web3, <span>everyone</span> can create and play{" "}
          <span>together</span> on one team.
        </p>
      </div>
      <div ref={cardSection} className="third-section">
        <div className="card-div">
          <div ref={card1} className="card card1">
            <img src={img} alt="" />
          </div>
          <div ref={card2} className="card card2">
            <img src={img} alt="" />
          </div>
          <div ref={card3} className="card card3">
            <img src={img} alt="" />
          </div>
          <div ref={card4} className="card card4">
            <img src={img} alt="" />
          </div>
          <div ref={card5} className="card card5">
            <img src={img} alt="" />
          </div>
        </div>
        <h1 ref={scrollText}>
          The Yugaverse The Yugaverse The Yugaverse The Yugaverse The Yugaverse
        </h1>
      </div>

      <div ref={parallexCont} className="fourth-section">
        <h1>The yuga verse runs on Ape coin</h1>
        <div className="bottom-part">
          <p>
            Owned and operated by the ApeCoin DAO, APE is a token supporting
            whať's next in web3. Yuga Labs is a contributor to ApeCoin, a
            community member of the ApeCoin DAO, and will be using ApeCoin as
            the primary token in Yuga Labs projects.
          </p>
          <button className="cta-btn">Learn more</button>
        </div>
      </div>
      <div ref={joinSec} className="join-us">
        <h1 className="join-h1">Join Us</h1>
        <div className="btn-div">
          <button className="cta-btn">Work at yuga</button>
          <button className="cta-btn">Partner with yuga</button>
        </div>
      </div>
      <footer>
        <h2>Yuga Labs</h2>
        <div className="right-links">
          <a href="#">Press</a>
          <a href="#">Times</a>
          <a href="#">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
