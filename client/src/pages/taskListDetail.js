import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import '../design/taskListDetail.css';
import BackArrow from "../resources/backArrow.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert';

function TaskDetailPage({ auth: { isAuthenticated, loading }, setAlert }) {
  const authPage = (
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

  const guestPage = (
    <div> <Redirect to="/"></Redirect> </div>
  );

    return (
      <Fragment>
           { !loading && (<Fragment>{ isAuthenticated ? authPage : guestPage}</Fragment>)}
      </Fragment>
    );
  }

  TaskDetailPage.prototypes = {
    setAlert: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { setAlert })(TaskDetailPage);
  