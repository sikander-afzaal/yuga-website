import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sine } from "gsap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import gsap from "gsap";
import "./App.css";
import img from "./Assets/img.png";
import logo from "./Assets/logo.png";
import brand1 from "./Assets/brands (1).png";
import brand2 from "./Assets/brands (2).png";
import brand3 from "./Assets/brands (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  const [loader, setLoader] = useState(true);
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
  const card6 = useRef(null);
  const cardSection = useRef(null);
  const scrollText = useRef(null);
  const parallexCont = useRef(null);
  const joinSec = useRef(null);
  const secondSec = useRef();
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(document.querySelector(".App"), {
      scrollTrigger: {
        trigger: document.querySelector(".first"),
        start: "top top",
        end: "bottom bottom",
      },
      backgroundColor: "black",
    });
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textSec.current,
        start: "top top",
        scrub: 3,
        end: "+=2000",
        pin: textSec.current,
        pinSpacing: 100,
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
    gsap.to(document.querySelector(".App"), {
      scrollTrigger: {
        trigger: secondSec.current,
        start: "top 40%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "white",
    });
    const hiddenWords = document.querySelectorAll(".second-section p span");

    gsap.to(hiddenWords, {
      scrollTrigger: {
        trigger: secondSec.current,
        start: "top 40%",
        end: "bottom bottom",
        scrub: 2,
      },
      opacity: 1,
      stagger: 0.3,
    });

    //third section -------------------------

    const cardTime = gsap.timeline({
      scrollTrigger: {
        trigger: secondSec.current,
        start: "center 15%",
        end: "+=1000",
        scrub: 4,
      },
    });
    if (window.innerWidth > 800) {
      cardTime
        .to(document.querySelector(".third-wrapper"), { yPercent: -10 })
        .to(
          [
            card1.current,
            card2.current,
            card3.current,
            card4.current,
            card5.current,
            card6.current,
          ],
          {
            y: 0,
            opacity: 1,
            stagger: 0.5,
          },
          "0"
        )
        .to(scrollText.current, { y: 0, opacity: 1, delay: 0.3 }, "0");
    } else {
      cardTime
        .to(
          [
            card1.current,
            card2.current,
            card3.current,
            card4.current,
            card5.current,
            card6.current,
          ],
          {
            y: 0,
            opacity: 1,
            stagger: 0.5,
          },
          "0"
        )
        .to(scrollText.current, { y: 0, opacity: 1, delay: 0.3 }, "0");
    }
    ///////////////////////////////////////////////////////////
    const pinned = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(".third-wrapper"),
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: document.querySelector(".third-wrapper"),
      },
    });
    const TEXT_SPEED = 3.5;
    const CARDS_ON_SCREEN =
      window.innerWidth > 800
        ? (window.innerWidth - 70) / 640 // number of cards on the screen desktop
        : (window.innerWidth - 70) / 415; // number of cards on the screen mobile
    const CARD_MOVE =
      window.innerWidth > 800
        ? (6 - CARDS_ON_SCREEN) * 620 // amount to be moved desktop
        : (6 - CARDS_ON_SCREEN) * 395; // amount to be moved mobile
    // window.innerWidth > 1560
    //   ? 2290
    //   : window.innerWidth > 1370
    //   ? 2500
    //   : window.innerWidth > 1060
    //   ? 2800
    //   : window.innerWidth > 800
    //   ? 3000
    //   : window.innerWidth > 650
    //   ? 1800
    //   : 2170;
    const TEXT_MOVE =
      window.innerWidth > 1560
        ? "-69%"
        : window.innerWidth > 1370
        ? "-73%"
        : window.innerWidth > 1060
        ? "-79.5%"
        : window.innerWidth > 800
        ? "-83.8%"
        : window.innerWidth > 650
        ? "-83.3%"
        : "-92.7%";
    pinned
      .to(
        document.querySelector(".card-div"),
        { x: -CARD_MOVE, duration: 4, delay: 0.1 },
        "lol"
      )
      .to(
        scrollText.current,
        { x: TEXT_MOVE, duration: TEXT_SPEED, delay: 0.1 },
        "lol"
      );

    //fourth section ---------------------------------------------------
    gsap.to(parallexCont.current, {
      scrollTrigger: {
        trigger: parallexCont.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -100,
    });

    //join section ------------------------------------------
    const h1 = document.querySelector(".join-h1");
    const row = document.querySelector(".row");
    const mainApp = document.querySelector(".App");
    gsap.to(mainApp, {
      scrollTrigger: {
        trigger: joinSec.current,
        start: "top 20%",
        toggleActions: "play reverse play reverse",
      },
      backgroundColor: "white",
    });
    const lastTime = gsap.timeline({
      scrollTrigger: {
        trigger: joinSec.current,
        start: "top top",
        end: "bottom bottom",
      },
    });
    lastTime.to([h1, row], { opacity: 1, stagger: 0.5 });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    return;
  };

  return (
    <div className="App">
      {loader && (
        <div class="loadingio-spinner-balls-ryaiebshxu">
          <div class="ldio-h7fovgyny86">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="first">
        <div className="social-links-head">
          <a href="https://www.instagram.com/Wagmilabz/" target={"blank"}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/wagmilabz" target={"blank"}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://discord.gg/gaSwDctDYV" target={"blank"}>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://t.me/wagmilabz" target={"blank"}>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
        <Particles
          id="tsparticles1"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "black",
              },
              image: `url(${logo})`,
              position: "50% 50%",
              repeat: "no-repeat",
              size: `${window.innerWidth > 850 ? "30%" : "70%"}`,
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "attract",
                  parallax: {
                    enable: false,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1,
                },
                bounce: {
                  distance: 200,
                },
                bubble: {
                  distance: 250,
                  duration: 2,
                  mix: false,
                  opacity: 1,
                  size: 0,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: [],
                  },
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff",
                      },
                      stop: {
                        value: "#000000",
                      },
                    },
                    radius: 1000,
                  },
                  shadow: {
                    color: {
                      value: "#000000",
                    },
                    length: 2000,
                  },
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 300,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: [],
                  },
                },
                attract: {
                  factor: 2,
                  distance: 200,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 1,
                },
              },
            },
            manualParticles: [],
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: true,
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                enable: false,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: ["#8ffe33", "#6833ff", "#fe33a9", "#33c3ff", "#32ebff"],
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                },
              },
              destroy: {
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 3,
                  },
                  rate: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                },
              },
              gradient: [],
              groups: {},
              links: {
                blink: false,
                color: {
                  value: "#ffffff",
                },
                consent: false,
                distance: 150,
                enable: false,
                frequency: 1,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 600,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: true,
                size: false,
                speed: 1,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 400,
                  factor: 1000,
                },
                limit: 0,
                value: 160,
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: {
                  min: 0,
                  max: 1,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 1,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0,
                },
              },
              reduceDuplicates: false,
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {},
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: {
                  min: 1,
                  max: 3,
                },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 4,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.3,
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            style: {},
            themes: [],
            zLayers: 100,
          }}
        />
      </div>
      <div ref={textSec} className="text-section">
        <h1 ref={line1}>
          <span style={{ color: "#8ffe33" }}>W</span>eb3 supporters utilising
        </h1>
        <h1 ref={line2}>
          <span style={{ color: "#6833ff" }}>A</span>rtistic representations to
        </h1>
        <h1 ref={line3}>
          <span style={{ color: "#fe33a9" }}>G</span>enerate blockchain
          solutions
        </h1>
        <h1 ref={line4}>
          <span style={{ color: "#33c3ff" }}>M</span>ade relatable by use of
        </h1>
        <h1 ref={line5}>
          <span style={{ color: "#32ebff" }}>I</span>nterlectual property
        </h1>
      </div>
      <div ref={secondSec} className="second-section">
        <p>
          Wagmi labz’ <span style={{ color: "#8ffe33" }}>Aims</span> to be the
          most <span style={{ color: "#6833ff" }}>diverse</span> community In
          the web3 <span style={{ color: "#fe33a9" }}>movement</span> , Priding
          ourselves upon <span style={{ color: "#33c3ff" }}>creating</span>{" "}
          passive income streams from our{" "}
          <span style={{ color: "#32ebff" }}>core</span> projects Using
          decentralisation <span style={{ color: "#6833ff" }}>wherever</span>{" "}
          possible To keep your{" "}
          <span style={{ color: "#32ebff" }}>private</span> income{" "}
          <span style={{ color: "#8ffe33" }}>private</span>, We believe in{" "}
          <span style={{ color: "#6833ff" }}>morals</span> over everything, But{" "}
          <span style={{ color: "#33c3ff" }}>also</span> in your{" "}
          <span style={{ color: "#fe33a9" }}>right</span> to privacy. We set{" "}
          <span style={{ color: "#32ebff" }}>ourselves</span> apart also by the{" "}
          <span style={{ color: "#8ffe33" }}>fundamentals</span> of the{" "}
          <span style={{ color: "#8ffe33" }}>Abbreviation</span> WAGMI, “we’re
          all gonna make it”
          <span>delivering</span> this to the best of our{" "}
          <span style={{ color: "#fe33a9" }}>ability</span> ,no matter your{" "}
          <span style={{ color: "#32ebff" }}>age</span>, status or belief{" "}
          <span style={{ color: "#32ebff" }}>system</span>, we use{" "}
          <span style={{ color: "#8ffe33" }}>Blockchain</span> technology and
          web 3 To give organisation and{" "}
          <span style={{ color: "#32ebff" }}>structure</span> while we deliver{" "}
          <span style={{ color: "#fe33a9" }}>positivity</span> to a happy
          community.
        </p>
      </div>
      <div className="third-wrapper">
        <div ref={cardSection} className="third-section">
          <div className="card-div">
            <div ref={card1} className="card card1">
              <img src={img} alt="" />
              <h3>GENESIS EDITION WAGMI NFT</h3>
              <h2>Coming Soon</h2>
            </div>
            <div ref={card2} className="card card2">
              <h1>W</h1>
            </div>
            <div ref={card3} className="card card3">
              <h1>A</h1>
            </div>
            <div ref={card4} className="card card4">
              <h1>G</h1>
            </div>
            <div ref={card5} className="card card5">
              <h1>M</h1>
            </div>
            <div ref={card6} className="card card6">
              <h1>I</h1>
            </div>
          </div>
          <h1 ref={scrollText}>
            CREATIVE, INNOVATIVE, IMAGINATIVE, POSITIVE, COLLECTIVE,
            PASSIONATELY SEEKING MORE PASSIVE COMMUNITY INCOME BUILDING
            OPPORTUNITIES for all
          </h1>
        </div>
      </div>

      <div ref={parallexCont} className="fourth-section">
        <h1>
          WAGMI LABZ <br /> “WERE ALL GONNA MAKE IT”
        </h1>
        <div className="bottom-part">
          <p>
            TRUE TO WAGMI BELIEFS,, We will start to release snippets of our
            upcoming ecosystem projects Here. More information will be released
            at a suitable time when development timelines sync with public
            demand , thanks for reading
          </p>
          <button className="cta-btn">Learn more</button>
        </div>
      </div>
      <div className="coming-soon">
        <h1>
          Coming soon to <br /> “WAGMI ECOSYSTEM”
        </h1>
      </div>
      <div ref={joinSec} className="join-us">
        <h1 className="join-h1">Be part of the future</h1>
        <p>As featured in</p>
        <div className="row">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
        </div>
      </div>
      <footer>
        <h2>Wagmilabz</h2>
        <div className="right-links">
          <a href="https://www.instagram.com/Wagmilabz/" target={"blank"}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/wagmilabz" target={"blank"}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://discord.gg/gaSwDctDYV" target={"blank"}>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://t.me/wagmilabz" target={"blank"}>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
