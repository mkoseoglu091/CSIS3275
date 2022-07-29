import React from "react";
import { Link } from "react-router-dom";
import '../design/taskList.css';
import BackArrow from "../resources/backArrow.png";

function TaskListPage() {
    return (
      <div>
         <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />
      
        <p id="tlheader"><span class="text">task list</span></p>

        <Link to={"/taskListDetail"}><button class="taskListBtn">borrow book from library</button></Link>
        <Link to={"/taskListDetail"}><button class="taskListBtn">book a discussion room</button></Link>
        <Link to={"/taskListDetail"}><button class="taskListBtn">buy a coffee at cafeteria</button></Link>

        {/*this part may be shown with js after connecting to db */}
      </div>
    );
  }
  
  export default TaskListPage;
  