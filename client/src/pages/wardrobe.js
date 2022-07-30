import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../design/wardrobe.css';
import BackArrow from "../resources/backArrow.png";

function WardrobePage() {
    return (
      <Fragment>
        <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="" />

        <p id="wardrobeTitle">WARDROBE</p>

        <div id="bgTable">
            <div id="wardrobeTable">
                <img className="wardrobeItem" src={require("../resources/Pants.png")} alt="cloth" />
                <img className="wardrobeItem" src={require("../resources/Shirt.png")} alt="cloth" />
            </div>
        </div>

        <Link to={"/taskList"}><button id="wardrobeBtn" href="the tasklist page">Want more items?</button></Link>
      </Fragment>
    );
  }
  
  export default WardrobePage;
  