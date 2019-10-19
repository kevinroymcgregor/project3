import React, { Component } from "react";
import Button from "../Button/Button.js";
// import ProfileImage from "../ProfileImage/ProfileImage.js";
import '../ProfileDetailsCard/ProfileDetailsCard.css';

const ProfileDetailsCard = (props) => {
    return (
        <div className="col l12 account-details">
        <h5 className="header center account-header">Account Details</h5>
        <div className="card horizontal profile-card">
          <div className="card-image col l4 m4">
          <div>
            <div className="container center-align avatar-wrapper">
              <img alt="User Name" src={props.avatar} className="avatar" id="user-avatar" />
              <b className="profile-name">{props.first} {props.last}</b>
            </div>
        </div>
          </div>
          <div className="card-stacked">
            <div className="card-content user-details">
              <ul>
                {/* <li><b>Name: </b>{props.first} {props.last}</li> */}
                <li><b>Email: </b>{props.email}</li>
                <li><b>City: </b>{props.city}</li>
                <li><b>State: </b>{props.state}</li>
                <li><b>Zipcode: </b>{props.zip}</li>
                <li><b>Phone: </b>{props.phone}</li>
              </ul>
            </div>
            {/* <div className="card-action right-align">
              <Button label="Edit" icon="edit"  />
            </div> */}
          </div>
        </div>
      </div>
    )
}

export default ProfileDetailsCard;