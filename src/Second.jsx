import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { gsap } from "gsap";
function Second() {
  const secondSec = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    //second section -------------------------------
    const hiddenWords = document.querySelectorAll(".second-section p span");
    gsap.to(hiddenWords, {
      scrollTrigger: {
        trigger: secondSec.current,
        start: "center 50%",
        end: "bottom bottom",
        scrub: 6,
        markers: true,
      },
      opacity: 1,
      stagger: 0.3,
    });
    gsap.to(document.querySelector(".App"), {
      scrollTrigger: {
        trigger: secondSec.current,
        start: "top top",
        end: "bottom bottom",
      },
      backgroundColor: "white",
      duration: 2,
    });

    //third section ----------------------------------
  }, []);
  return (
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
  );
}

export default Second;
