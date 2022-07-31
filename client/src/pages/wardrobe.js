import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import '../design/wardrobe.css';
import BackArrow from "../resources/backArrow.png";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePet } from '../actions/pet';

function WardrobePage({ pet: {pet}, updatePet }) {

  // get options and format them to match images in resources
  var shirtsArray = [];
  var pantsArray = [];
  pet.petShirtOptions.forEach(shirt => shirtsArray.push(`s${shirt}`));
  pet.petPantsOptions.forEach(pants => pantsArray.push(`p${pants}`));
  var sArray = [...new Set(shirtsArray)];
  var pArray = [...new Set(pantsArray)];
  console.log(sArray);
  console.log(pArray);

    return (
      <Fragment>
        <Link to={"/main"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="" />

        <p id="wardrobeTitle">WARDROBE</p>

        <div id="bgTable">
            <div id="wardrobeTable">
                {sArray.map((s) => <img className="wardrobeItem" src={require(`../resources/${s}.png`)} alt="cloth" />)}
                {pArray.map((p) => <img className="wardrobeItem" src={require(`../resources/${p}.png`)} alt="cloth" />)}

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
  