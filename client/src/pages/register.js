import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../design/register.css';
import BackArrow from "../resources/backArrow.png";

function RegisterPage() {
    return (
      <Fragment>
        <Link to={"/"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />


    <p id="registerTitle">
        <span className="text">Welcome</span><br />
        <span className="text">New Roarers!</span>
    </p>

    <form id="registerForm">
        <label for="stuid"><span className="text">ID</span></label>
        <br />
        <input type="text" id="stuID" name="stuid" />
        <br />
        <label for="stuemail"><span className="text">Email</span></label>
        <br />
        <input type="text" id="stuEmail" name="stuemail" />
        <br />
        <label for="stuname"><span className="text">Name</span></label>
        <br />
        <input type="text" id="stuName" name="stuname" />
        <br />
        <label for="stupw"><span className="text">Password</span></label>
        <br />
        <input type="text" id="stuPW" name="stupw" />
        <br />
        <label for="stupwc" id="pwconfirm"><span className="text">Password Confirm</span></label>
        <br />
        <input type="text" id="stuPWC" name="stupwc" />
    </form>

    <Link to={"./"}><button id="registerButn">REGISTER</button></Link>
      </Fragment>
    );
  }
  
  export default RegisterPage;
  