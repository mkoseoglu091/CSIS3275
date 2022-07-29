import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../design/login.css'

function LoginPage() {
    return (
      <Fragment>
        <p id="loginTitle"><span className="text">Douglas OrIentation</span></p>

        <form id="loginForm">
            <label htmlFor="stuid"><span className="text">ID</span></label>
            <br />
            <input type="text" id="stuID" name="stuid" />
            <br />
            <label htmlFor="stupw"><span className="text">Password</span></label>
            <br />
            <input type="text" id="stuPW" name="stupw" />
        </form>

        <Link to={"./main"}><button id="loginButn">LOGIN</button></Link>

        <div id="loginOther">
            <p id="forget"><span className="text">Forget Password?</span></p>
            <p id="register"><span className="text">Don't have an account?</span></p>
            <Link to={"/register"} id="regisLink">Register</Link>
        </div>
      </Fragment>
    );
  }
  
  export default LoginPage;
  