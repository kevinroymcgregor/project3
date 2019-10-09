import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import ProfileImage from "../ProfileImage/ProfileImage.js";

const ProfileDetailsCard = (props) => {
    return (
        <div className="col s12">
           <ProfileImage />
        <h4 className="header">Account Details</h4>
        <div className="card horizontal">
          <div className="card-image">
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>User account details here</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileDetailsCard;