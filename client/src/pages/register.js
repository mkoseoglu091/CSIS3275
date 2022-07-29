import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../design/register.css';
import BackArrow from "../resources/backArrow.png";
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types'
import axios from 'axios';

const RegisterPage = ({ setAlert, register }) => {

    const [formData, setFormData] = useState({
      studentID: '',
      email: '',
      name: '',
      password: '',
      password2: ''
    });

    const { studentID, email, name, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // temporary
  const onSubmit = async e => {
    e.preventDefault();
      if(password !== password2) {
        setAlert('Passwords do not match', 'danger');
      } else {
        register({
          studentID,
          email,
          name,
          password
        });
      }
  };

    // how to do it with axios. This works for sure
    /*
    const onSubmit = async e => {
      e.preventDefault();
      if(password !== password2) {
        console.log('Passwords do not match');
      } else {
        const newUser = {
          studentID,
          email,
          name,
          password
        }

        try {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }

          const body = JSON.stringify(newUser);

          const res = await axios.post('/api/users', body, config);
          console.log(res.data);
        } catch(err) {
          console.error(err.response.data);
        }
      }
    }
    */

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
        <input type="text" id="stuID" name="studentID" defaultValue={studentID} onChange={e => onChange(e)} />
        <br />
        <label htmlFor="stuemail"><span className="text">Email</span></label>
        <br />
        <input type="email" id="stuEmail" name="email" defaultValue={email} onChange={e => onChange(e)} />
        <br />
        <label htmlFor="stuname"><span className="text">Name</span></label>
        <br />
        <input type="text" id="stuName" name="name" defaultValue={name} onChange={e => onChange(e)} />
        <br />
        <label htmlFor="stupw"><span className="text">Password</span></label>
        <br />
        <input type="password" id="stuPW" name="password" defaultValue={password} onChange={e => onChange(e)} />
        <br />
        <label htmlFor="stupwc" id="pwconfirm"><span className="text">Password Confirm</span></label>
        <br />
        <input type="password" id="stuPWC" name="password2" defaultValue={password2} onChange={e => onChange(e)} />
        <button type="submit" className="btn btn-primary" id="registerButn">REGISTER</button>
    </form>

    {/*<Link to={"./"}><button type="submit" className="btn btn-primary" id="registerButn">REGISTER</button></Link>*/}
      </Fragment>
    );
  };

  RegisterPage.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
  };
  
  export default connect(null, { setAlert, register })(RegisterPage);
