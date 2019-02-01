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

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <HeroBanner min={"-30%"} max={"30%"} image={start}>
          <h1>Hero Banner with Parallax</h1>
        </HeroBanner>
      </ParallaxProvider>
    );
  }
}

export default App;
