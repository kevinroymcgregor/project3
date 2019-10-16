import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Button/Button.css';

function Button(props) {
    return (
        <div className="waves-effect waves-light btn-small btn-flat buttons"><i className="material-icons right">{props.icon}</i>{props.label}</div>
    )
}

export default Button;