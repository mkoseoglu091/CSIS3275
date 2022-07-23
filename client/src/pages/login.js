import React from "react";
import { Link } from "react-router-dom";
import '../design/login.css'

function LoginPage() {
    return (
      <div>
        <p id="loginTitle"><span class="text">Douglas OrIentation</span></p>

        <form id="loginForm">
            <label for="stuid"><span class="text">ID</span></label>
            <br />
            <input type="text" id="stuID" name="stuid" />
            <br />
            <label for="stupw"><span class="text">Password</span></label>
            <br />
            <input type="text" id="stuPW" name="stupw" />
        </form>

        <Link to={"./main"}><button id="loginButn">LOGIN</button></Link>

        <div id="loginOther">
            <p id="forget"><span class="text">Forget Password?</span></p>
            <p id="register"><span class="text">Don't have an account?</span></p>
            <Link to={"/register"} id="regisLink">Register</Link>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
  