import React, { Fragment }from "react";
import '../design/adminPage.css'

const  AdminLogin = () => {
    return (
      <Fragment>
        <div id="adminWrapper">

        <p id="head">Douglas College Mascots Management Page</p>
        <p id="second">Task Pending List</p>

        <table id="adminTable">
            <tr>
              <th>account</th>
              <th>task</th>
              <th>image</th>
              <th>approval</th>
            </tr>
            <tr>
              <td>300xxxyyy</td>
              <td>borrow book from library</td>
              <td>xxx.jpeg</td>
              <td><button className="adminButton">tick</button></td>
            </tr>
            <tr>
              <td>300zzzqqq</td>
              <td>task2</td>
              <td>sss.jpeg</td>
              <td><button className="adminButton">no-tick</button></td>
            </tr>
        </table>
        </div>
       
      </Fragment>
    );
  }
  
  export default AdminLogin;
  