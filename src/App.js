import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner
} from "react-scroll-parallax";
import { jsx, css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import logo from "./logo.svg";
import start from "./start.jpg";
import scratch from "./scratch.jpg";
import "./App.css";

const HeroBanner = ({ image, min, max, children }) => (
  <div className="hero-container">
    <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${image})` }}
      />
    </Parallax>
    <div className="hero-children">{children}</div>
  </div>
);

var Header = {
  top: "100px"
};
const ParallaxHeader = () => (
  <Parallax
    offsetXMin={0}
    offsetXMax={110}
    offsetYMin={0}
    offsetYMax={110}
    slowerScrollRate
    tag="header"
  >
    <h1>Handmade in Norrbotten</h1>
  </Parallax>
);
const ParallaxSpan = () => (
  <Parallax
    offsetXMin={90}
    offsetXMax={-10}
    offsetYMin={-950}
    offsetYMax={800}
    slowerScrollRate
    tag="header"
  >
    <div className="spncont">
      {" "}
      <span className="spn" /> <span className="spn" />{" "}
    </div>
  </Parallax>
);

const ParallaxText = () => (
  <Parallax
    offsetXMin={90}
    offsetXMax={-10}
    offsetYMin={-950}
    offsetYMax={800}
    slowerScrollRate
    tag="header"
  >
    <div className="spncont">
      {" "}
      <span className="spn" /> <span className="spn" />{" "}
    </div>
  </Parallax>
);

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <HeroBanner min={"-30%"} max={"30%"} image={start}>
          {/* <h1>Handmade in Norrbotten</h1> */}
          <ParallaxHeader />
        </HeroBanner>
        <ParallaxSpan />
      </ParallaxProvider>
    );
  }
}

export default App;
