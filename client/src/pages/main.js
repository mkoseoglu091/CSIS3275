import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../design/main.css';
import MascotImage from "../resources/roary.png";

function MainPage() {
    return (
      <Fragment>
        <div id="grid">
        <p id="mainTitle">
            <span className="text">DOUGLAS COLLEGE</span>
        </p>

        <img id="mascot" src={MascotImage} alt="roary" />

        <div id="mainButton">
            <Link to={"/taskList"}><button className="mainButn">TASK LIST</button></Link>
            <Link to={"/wardrobe"}><button className="mainButn">WARDROBE</button></Link>
            <Link to={"/setting"}><button className="mainButn">SETTINGS</button></Link>
            <Link to={"/"}><button className="mainButn">LOGOUT</button></Link>
        </div>
    
        <div id="mascotName">
            <a href="/questions.html"><button id="playButn">PLAY</button></a>
            <p id="nameLabel">MASCOT NAME :</p>
            <p id="Name">ROARY</p>
        </div>
      </div>
    </Fragment>
    );
  }
  
  export default MainPage;
  