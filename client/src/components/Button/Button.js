import React, { Component } from "react";
import { Link } from "react-router-dom";

function Button(props) {
    return (
        <a className="waves-effect waves-light btn-small btn-flat"><i className="material-icons right">{props.icon}</i>{props.label}</a>
    )
}

export default Button;