import React from "react";
import Card from "./Card";
import Content from './content.js'
import {icons} from '../icons/icons';

export default function Congratulations() {
  return (
    <div className="congts-top">
      <div className="logo">
        <a href="https://www.gokwik.co">
          {icons.logo}
        </a>
      </div>
      <div style={{display: "inline-flex"}}>
          <h3 className="cong-text fancy-color">Congratulatios </h3>
          <span className="emogi">🥳</span>
      </div>
      <Card />
      <Content />
    </div>
  );
}
