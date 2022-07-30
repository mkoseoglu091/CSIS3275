import React, { Fragment }from "react";
import '../design/adminLogin.css'

const  AdminLogin = () => {
    return (
      <Fragment>
        <div id="adminLoginWrapper">

        <p id="adminLoginTitle">Douglas College Mascots Management Page</p>
        <p id="adminLoginSubt">Admin Login</p>

        <form id="adminLoginForm">
            <label htmlFor="admiID">ID</label>
            <input type="text" id="adminID" name="adminID" />
            <br />
            <label htmlFor="adminPW">Password</label>
            <input type="password" id="adminPW" name="adminPW" />
            <br />
            <button type="submit" className="btn btn-primary" id="adminLoginButn">LOGIN</button>
        </form>
        </div>
       
      </Fragment>
    );
  }
  
  export default AdminLogin;
  