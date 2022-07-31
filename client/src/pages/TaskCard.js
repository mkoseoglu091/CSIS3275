// this might be useful to transfer task details as a prop to the next component

import React from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from "react-router-dom";

const TaskCard = ({ task: { taskName, taskID, taskDesc, taskComplete } }) => {
  return (
    <div className="taskCard">
        <Link to={{pathname:"/taskListDetail", state: {taskName, taskID, taskDesc, taskComplete} }}><button className="taskListBtn">{taskName}</button></Link>
        
    </div>
    
  )
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskCard
