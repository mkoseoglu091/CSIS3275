import React, { Fragment }from "react";
import { Link, Redirect } from "react-router-dom";
import '../design/adminPage.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutAdmin } from '../actions/auth';

const  AdminPage = ({ auth: { isAdminAuthenticated, loadingAdmin }, logoutAdmin }) => {

    return (
      <Fragment>
        <div id="adminWrapper">

        <p id="head">Douglas College Mascots Management Page</p>
        <p id="second">Task Pending List</p>

        <table id="adminTable">
          <tbody>
            <tr>
              <th>Student ID</th>
              <th>Task ID</th>
              <th>Complete Status</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <select>
                  <option>true</option>
                  <option>false</option>
                </select>
              </td>
              <td><button className="adminButton">submit</button></td>
            </tr>
            </tbody>
        </table>

        <table id="taskAppendix">
          <tbody>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
          </tr>
          <tr>
            <td>001-002</td>
            <td>Check out a book</td>
          </tr>
          <tr>
            <td>001-003</td>
            <td>Return a book</td>
          </tr>
          <tr>
            <td>002-001</td>
            <td>Visit enrolment services</td>
          </tr>
          <tr>
            <td>002-002</td>
            <td>Get course planning support</td>
          </tr>
          <tr>
            <td>002-003</td>
            <td>Learn how and when to drop courses</td>
          </tr>
          <tr>
            <td>002-004</td>
            <td>Learn how to enrol waitlist</td>
          </tr>
          </tbody>
        </table>
        </div>

        <Link to={"/adminLogin"}><button className="logout" onClick={logoutAdmin}>LOGOUT</button></Link>
       
      </Fragment>
    );
  }

  AdminPage.prototypes = {
    logoutAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutAdmin })(AdminPage);
  