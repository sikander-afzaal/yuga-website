import React from "react";
import "./styles/Traits.css";
import AnimatedPage from "../../Components/AnimatedPage";
import SmallBox from "../../Components/SmallBox.jsx";
import data from "./images";
function Traits() {
  return (
    <AnimatedPage>
      <div className="traits">
        {/* Backgrounds box ----------------- */}
        <div className="traits-box">
          <h1>Backgrounds</h1>
          <div className="traits-grid">
            {data.background.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Skins box ----------------- */}
        <div className="traits-box">
          <h1>Skins</h1>
          <div className="traits-grid">
            {data.body.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Accessories box --------------------------- */}
        <div className="traits-box">
          <h1>Accessories</h1>
          <div className="traits-grid">
            {data.Accessories.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* head gear box --------------------------- */}
        <div className="traits-box">
          <h1>Head Wear</h1>
          <div className="traits-grid">
            {data.head.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* necklaces box --------------------------- */}
        <div className="traits-box">
          <h1>Chains</h1>
          <div className="traits-grid">
            {data.neck.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Sling Bag box --------------------------- */}
        <div className="traits-box">
          <h1>Sling Bag</h1>
          <div className="traits-grid">
            {data.sling.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Tattoos box --------------------------- */}
        <div className="traits-box">
          <h1>Tattoos</h1>
          <div className="traits-grid">
            {data.tattoo.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Tooth box --------------------------- */}
        <div className="traits-box">
          <h1>Teeth</h1>
          <div className="traits-grid">
            {data.tooth.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Batman box --------------------------- */}
        <div className="traits-box">
          <h1>Batman</h1>
          <div className="traits-grid">
            {data.batman.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* HeavyTops box --------------------------- */}
        <div className="traits-box">
          <h1>Heavy Tops</h1>
          <div className="traits-grid">
            {data.HeavyTops.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Joker box --------------------------- */}
        <div className="traits-box">
          <h1>Joker</h1>
          <div className="traits-grid">
            {data.Joker.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>

        {/* Light Tops box --------------------------- */}
        <div className="traits-box">
          <h1>Light Tops</h1>
          <div className="traits-grid">
            {data.LightTops.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Traits;
