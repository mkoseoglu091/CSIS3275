import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../design/register.css';
import BackArrow from "../resources/backArrow.png";

const RegisterPage = () => {

    const [formData, setFormData] = useState({
      id: '',
      email: '',
      name: '',
      password: '',
      password2: ''
    });

    const { id, email, name, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();
      if(password !== password2) {
        console.log('Passwords do not match');
      } else {
        console.log(formData);
      }
    }

    return (
      <Fragment>
        <Link to={"/"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />


    <p id="registerTitle">
        <span className="text">Welcome</span><br />
        <span className="text">New Roarers!</span>
    </p>

    <form id="registerForm" className="form" onSubmit={e => onSubmit(e)}>
        <label htmlFor="stuid"><span className="text">ID</span></label>
        <br />
        <input type="text" id="stuID" name="id" defaultValue={id} onChange={e => onChange(e)} required />
        <br />
        <label htmlFor="stuemail"><span className="text">Email</span></label>
        <br />
        <input type="email" id="stuEmail" name="email" defaultValue={email} onChange={e => onChange(e)} required/>
        <br />
        <label htmlFor="stuname"><span className="text">Name</span></label>
        <br />
        <input type="text" id="stuName" name="name" defaultValue={name} onChange={e => onChange(e)} required />
        <br />
        <label htmlFor="stupw"><span className="text">Password</span></label>
        <br />
        <input type="password" id="stuPW" name="password" defaultValue={password} onChange={e => onChange(e)} required/>
        <br />
        <label htmlFor="stupwc" id="pwconfirm"><span className="text">Password Confirm</span></label>
        <br />
        <input type="password" id="stuPWC" name="password2" defaultValue={password2} onChange={e => onChange(e)} required/>
        <input type="submit" className="btn btn-primaty" id="registerButn" value="Register"/>
    </form>

    {/*<Link to={"./"}><button id="registerButn">REGISTER</button></Link>*/}
      </Fragment>
    );
  }
  
  export default RegisterPage;
  