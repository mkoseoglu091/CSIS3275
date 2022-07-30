import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../design/taskList.css';
import BackArrow from "../resources/backArrow.png";

function TaskListPage() {
    return (
      <Fragment>
         <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />
      
        <p id="tlheader"><span className="text">task list</span></p>

        <Link to={"/taskListDetail"}><button className="taskListBtn">borrow book from library</button></Link>
        <Link to={"/taskListDetail"}><button className="taskListBtn">book a discussion room</button></Link>
        <Link to={"/taskListDetail"}><button className="taskListBtn">buy a coffee at cafeteria</button></Link>

        {/*this part may be shown with js after connecting to db */}
      </Fragment>
    );
  }
  
  export default TaskListPage;
  