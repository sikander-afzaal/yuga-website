import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sine } from "gsap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import gsap from "gsap";
import "./App.css";
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
        start: "center 60%",
        end: "bottom bottom",
        scrub: 2,
      },
      opacity: 1,
      stagger: 0.3,
    });

    const cardTime = gsap.timeline({
      scrollTrigger: {
        trigger: secondSec.current,
        start: "center 15%",
        end: "+=1000",
        scrub: 4,
      },
    });
    cardTime
      .to(document.querySelector(".third-wrapper"), { yPercent: -10 })
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
          stagger: 0.5,
        },
        "0"
      )
      .to(scrollText.current, { y: 0, opacity: 1, delay: 0.3 }, "0");
    //third section -------------------------
    const MOVE = card1.current.getBoundingClientRect().width * 4;
    const pinned = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(".third-wrapper"),
        start: "top 0%",
        end: "+=5000",
        scrub: 3,
        pin: document.querySelector(".third-wrapper"),
        markers: true,
      },
    });
    pinned
      .to(document.querySelector(".card-div"), { x: -MOVE, duration: 4 }, "lol")
      .to(scrollText.current, { x: -MOVE, duration: 2.3, delay: 0.1 }, "lol");
    //fourth section ---------------------------------------------------
    gsap.to(parallexCont.current, {
      scrollTrigger: {
        trigger: parallexCont.current,
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
        markers: true,
      },
      yPercent: -100,
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

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <div className="first">
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
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
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
              zIndex: 0,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
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
                  distance: 400,
                  duration: 2,
                  mix: false,
                  opacity: 0.8,
                  size: 40,
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
                  distance: 200,
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
                value: "#ffffff",
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
                enable: true,
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
                    y: 1200,
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
                random: false,
                size: false,
                speed: 2,
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
                  area: 800,
                  factor: 1000,
                },
                limit: 0,
                value: 100,
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: {
                  min: 0.1,
                  max: 0.5,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 3,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.1,
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
                  min: 0.1,
                  max: 10,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 20,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.1,
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
          ourselves upon
          <span style={{ color: "#33c3ff" }}>creating</span> passive income
          streams from our <span style={{ color: "#32ebff" }}>core</span>{" "}
          projects Using decentralisation{" "}
          <span style={{ color: "#6833ff" }}>wherever</span> possible To keep
          your <span style={{ color: "#32ebff" }}>private</span> income{" "}
          <span style={{ color: "#8ffe33" }}>private</span>, We believe in{" "}
          <span style={{ color: "#6833ff" }}>morals</span> over everything, But{" "}
          <span style={{ color: "#33c3ff" }}>also</span> in your{" "}
          <span style={{ color: "#fe33a9" }}>right</span> to privacy We set{" "}
          <span style={{ color: "#32ebff" }}>ourselves</span> apart also by the{" "}
          <span style={{ color: "#8ffe33" }}>fundamentals</span>
          of the <span style={{ color: "#8ffe33" }}>Abbreviation</span> WAGMI,
          “we’re all gonna make it”
          <span>delivering</span> this to the best of our{" "}
          <span style={{ color: "#fe33a9" }}>ability</span> ,no matter your{" "}
          <span style={{ color: "#32ebff" }}>age</span>, status or belief{" "}
          <span style={{ color: "#32ebff" }}>system</span>, we use{" "}
          <span style={{ color: "#8ffe33" }}>Blockchain</span> technology and
          web 3 To give organising{" "}
          <span style={{ color: "#32ebff" }}>structure</span> while we deliver{" "}
          <span style={{ color: "#fe33a9" }}>positivity</span> to a happy
          community
        </p>
      </div>
      <div className="third-wrapper">
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
            CREATIVE,INNOVATIVE,IMAGINATIVE,POSITIVE,COLLECTIVE,PASSIVE
          </h1>
        </div>
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
        {/* <Particles
          id="tsparticles2"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "white",
              },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#000000",
                },
                opacity: 1,
              },
              enable: false,
            },
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
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
                  distance: 400,
                  duration: 2,
                  mix: false,
                  opacity: 0.8,
                  size: 40,
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
                        value: "#000000",
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
                  distance: 200,
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
                value: "black",
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
                  value: "#000000",
                },
                consent: false,
                distance: 150,
                enable: true,
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
                    y: 1200,
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
                random: false,
                size: false,
                speed: 2,
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
                  area: 800,
                  factor: 1000,
                },
                limit: 0,
                value: 100,
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: {
                  min: 0.1,
                  max: 0.5,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 3,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.1,
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
                  min: 0.1,
                  max: 10,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 20,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.1,
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
        /> */}
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
