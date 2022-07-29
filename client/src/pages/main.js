import React from "react";
import { Link } from "react-router-dom";
import '../design/main.css';
import MascotImage from "../resources/roary.png";

function MainPage() {
    return (
      <div>
        <div id="grid">
        <p id="mainTitle">
            <span class="text">DOUGLAS COLLEGE</span>
        </p>

        <img id="mascot" src={MascotImage} alt="roary" />

        <div id="mainButton">
            <Link to={"/taskList"}><button class="mainButn">TASK LIST</button></Link>
            <Link to={"/wardrobe"}><button class="mainButn">WARDROBE</button></Link>
            <Link to={"/setting"}><button class="mainButn">SETTINGS</button></Link>
            <Link to={"/game"}><button class="mainButn">PLAY</button></Link>
            <Link to={"/"}><button class="mainButn">LOGOUT</button></Link>
        </div>
    
        <div id="mascotName">
            <p id="nameLabel">MASCOT NAME :</p>
            <p id="Name">ROARY</p>
        </div>
      </div>
    </div>
    );
  }
  
  export default MainPage;
  