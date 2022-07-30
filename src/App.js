import { useLayoutEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sine } from "gsap";
function App() {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const textSec = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textSec.current,
        start: "top top",
        scrub: 2,
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
    </div>
  );
}

export default App;
