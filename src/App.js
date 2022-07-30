import { useLayoutEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sine } from "gsap";
function App() {
  //first section--------------------
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const textSec = useRef(null);
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
        start: "top 50%",
        end: "bottom bottom",
        scrub: 6,
      },
      backgroundColor: "white",
    });
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
    </div>
  );
}

export default App;
