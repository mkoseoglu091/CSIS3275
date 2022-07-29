import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../design/taskListDetail.css';
import BackArrow from "../resources/backArrow.png";

function TaskDetailPage() {
    return (
      <Fragment>
        <Link to={"/taskList"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />
        
        <p id="tldetheader"><span className="text">borrow book from library</span></p>

        <p id="dettable">
          Details Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quaerat unde exercitationem natus harum nesciunt hic error ut deserunt incidunt cum ex, fugit at, laudantium sequi itaque omnis tempore! Quas? asdjfkljaskldfjajlsdjfkl asdjkfljklsa.
        </p>

        <button id="tldetbtn1">upload</button>
      </Fragment>
    );
  }
  
  export default TaskDetailPage;
  