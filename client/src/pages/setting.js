import React from "react";
import { Link } from "react-router-dom";
import '../design/setting.css'
import BackArrow from "../resources/backArrow.png";

function SettingPage() {
    return (
      <div>
        <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />

        <p id="settingheader"><span class="text">setting</span></p>
        <p id="changepwdheader"><span class="text">change password</span></p>

        <form id="settingForm">
            <label for="newpwd"><span class="text">new password</span></label>
            <br />
            <input type="text" id="newpwd" name="newpwd" />
            <br />
            <label for="confpwd"><span class="text">confirm password</span></label>
            <br />
            <input type="text" id="confpwd" name="confpwd" />
        </form>

        <button id="settingbtn1">change password</button>
        {/* need a js here */}

        <Link to={"/contactAdmin"}><button id="settingbtn2">contact admin</button></Link>
      </div>
      
    );
  }
  
  export default SettingPage;
  