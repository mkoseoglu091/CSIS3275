import React from "react";
import { Link } from "react-router-dom";
import '../design/register.css';
import BackArrow from "../resources/backArrow.png";

function RegisterPage() {
    return (
      <div>
        <Link to={"/"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />


    <p id="registerTitle">
        <span class="text">Welcome</span><br />
        <span class="text">New Roarers!</span>
    </p>

    <form id="registerForm">
        <label for="stuid"><span class="text">ID</span></label>
        <br />
        <input type="text" id="stuID" name="stuid" />
        <br />
        <label for="stuemail"><span class="text">Email</span></label>
        <br />
        <input type="text" id="stuEmail" name="stuemail" />
        <br />
        <label for="stuname"><span class="text">Name</span></label>
        <br />
        <input type="text" id="stuName" name="stuname" />
        <br />
        <label for="stupw"><span class="text">Password</span></label>
        <br />
        <input type="text" id="stuPW" name="stupw" />
        <br />
        <label for="stupwc" id="pwconfirm"><span class="text">Password Confirm</span></label>
        <br />
        <input type="text" id="stuPWC" name="stupwc" />
    </form>

    <Link to={"./"}><button id="registerButn">REGISTER</button></Link>
      </div>
    );
  }
  
  export default RegisterPage;
  