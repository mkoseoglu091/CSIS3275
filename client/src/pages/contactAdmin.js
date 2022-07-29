import React from "react";
import { Link } from "react-router-dom";
import '../design/contactAdmin.css'
import BackArrow from "../resources/backArrow.png";

function ContactAdminPage() {
    return (
      <div>
        <Link to={"/setting"}><img id="backArrow" src={BackArrow} alt="backArrow" /></Link>
        <img id="backArrow_none" src={BackArrow} alt="backArrow" />
        
        <p id="contactUs"><span class="text" >Contact Us</span> </p>
        <textarea id="contactTextBox" name="subject" placeholder="Write something.."></textarea>
        <button id="contactAdminButn">submit</button>

        {/* need a js here */}
      </div>
    );
  }
  
  export default ContactAdminPage;
  