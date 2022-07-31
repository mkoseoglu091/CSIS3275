import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import '../design/wardrobe.css';
import BackArrow from "../resources/backArrow.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePet } from '../actions/pet';

function WardrobePage({ pet, updatePet }) {


    return (
      <Fragment>
        <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="" />

        <p id="wardrobeTitle">WARDROBE</p>

        <div id="bgTable">
            <div id="wardrobeTable">
                <img className="wardrobeItem" src={require("../resources/Pants.png")} alt="cloth" />
                <img className="wardrobeItem" src={require("../resources/Shirt.png")} alt="cloth" />
            </div>
        </div>

        <Link to={"/taskList"}><button id="wardrobeBtn" href="the tasklist page">Want more items?</button></Link>
      </Fragment>
    );
  }

  WardrobePage.prototypes = {
    pet: PropTypes.object.isRequired,
    updatePet: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    pet: state.pet,
  });
  
  export default connect(mapStateToProps, { updatePet })(WardrobePage);
  