import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../design/login.css'
import axios from 'axios';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    studentID: '',
    password: ''
  });

  const { studentID, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // temporary
  const onSubmit = async e => {
    e.preventDefault();
    console.log('success...');
  }


    return (
      <Fragment>
        <p id="loginTitle"><span className="text">Douglas Orientation</span></p>

        <form id="loginForm" className="form" onSubmit={e => onSubmit(e)}>
            <label htmlFor="stuid"><span className="text">ID</span></label>
            <br />
            <input type="text" id="stuID" name="studentID" value={studentID} onChange={e => onChange(e)} required/>
            <br />
            <label htmlFor="stupw"><span className="text">Password</span></label>
            <br />
            <input type="text" id="stuPW" name="password" value={password} onChange={e => onChange(e)} required />
            <input type="submit" className="btn btn-primaty" id="loginButn" value="LOGIN"/>
        </form>

        {/*<Link to={"./main"}><button id="loginButn">LOGIN</button></Link>*/}

        <div id="loginOther">
            <p id="forget"><span className="text">Forget Password?</span></p>
            <p id="register"><span className="text">Don't have an account?</span></p>
            <Link to={"/register"} id="regisLink">Register</Link>
        </div>
      </Fragment>
    );
  }
  
  export default LoginPage;
  