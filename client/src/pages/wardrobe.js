import React from "react";
import { Link } from "react-router-dom";
import '../design/wardrobe.css';
import BackArrow from "../resources/backArrow.png";

function WardrobePage() {
    return (
      <div>
        <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="" />

        <p id="wardrobeTitle">WARDROBE</p>

        <div id="bgTable">
            <div id="wardrobeTable">
                <img class="wardrobeItem" src={require("../resources/Pants.png")} alt="cloth" />
                <img class="wardrobeItem" src={require("../resources/Shirt.png")} alt="cloth" />
            </div>
        </div>

        <Link to={"/taskList"}><button id="wardrobeBtn" href="the tasklist page">Want more items?</button></Link>
      </div>
    );
  }
  
  export default WardrobePage;
  