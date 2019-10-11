import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import ProfileImage from "../ProfileImage/ProfileImage.js";

const ProfileDetailsCard = (props) => {
    return (
        <div className="col s12">
           <ProfileImage />
        <h5 className="header center">Account Details</h5>
        <div className="card horizontal">
          <div className="card-image">
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <ul>
                <li><b>Name: </b>{props.first} {props.last}</li>
                <li><b>Email: </b>{props.email}</li>
                <li><b>City: </b>{props.city}</li>
                <li><b>State: </b>{props.state}</li>
                <li><b>Zipcode: </b>{props.zip}</li>
                <li><b>Phone: </b>{props.phone}</li>
              </ul>
            </div>
            <div className="card-action">
              <Button label="Edit" icon="edit"  />
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileDetailsCard;