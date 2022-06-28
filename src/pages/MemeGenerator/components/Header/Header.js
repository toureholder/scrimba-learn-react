import React, { Component } from "react";
import "./Header.css";
import trollFace from "../../../../assets/trollFace.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="meme-generator--header">
        <div className="app-wrapper">
          <img src={trollFace} alt="" />
          <span className="meme-generator--header--brand">MemeGenerator</span>
          <span className="meme-generator--header--subtitle">
            React Course - Project 3
          </span>
        </div>
      </header>
    );
  }
}
