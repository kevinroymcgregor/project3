import React, { Component } from "react";
import { Link } from "react-router-dom";

function Button(props) {
    return (
        <a className="waves-effect waves-light btn">{props.label}</a>
    )
}

export default Button;