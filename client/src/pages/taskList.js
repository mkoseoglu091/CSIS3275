import React, { Fragment, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import '../design/taskList.css';
import BackArrow from "../resources/backArrow.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert';
import { getUserTasks } from '../actions/tasks';

function TaskListPage({ auth: { isAuthenticated, loading }, setAlert, getUserTasks, tasks }) {

  useEffect(() => {
    getUserTasks();
  }, []);

  const authPage = (
  <Fragment>
    <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
    <img id="backArrow_none" src={BackArrow} alt="backArrow" />
 
    <p id="tlheader"><span className="text">task list</span></p>

    <Link to={"/taskListDetail"}><button className="taskListBtn">borrow book from library</button></Link>
    <Link to={"/taskListDetail"}><button className="taskListBtn">book a discussion room</button></Link>
    <Link to={"/taskListDetail"}><button className="taskListBtn">buy a coffee at cafeteria</button></Link>

   {/*this part may be shown with js after connecting to db */}
  </Fragment>);

const guestPage = (
  <div> <Redirect to="/"></Redirect> </div>
);

    return (
        <Fragment>
           { !loading && (<Fragment>{ isAuthenticated ? authPage : guestPage}</Fragment>)}
        </Fragment>
    );
  }

  TaskListPage.prototypes = {
    setAlert: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getUserTasks: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth,
    tasks: state.tasks
  });
  
  export default connect(mapStateToProps, { setAlert, getUserTasks })(TaskListPage);
  