import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import ProfileImage from "../ProfileImage/ProfileImage.js";

function ProfileDetailsCard(props) {
    return (
        <div class="col s12 m7">
           <ProfileImage />
        <h2 class="header">Account Details</h2>
        <div class="card horizontal">
          <div class="card-image">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileDetailsCard;