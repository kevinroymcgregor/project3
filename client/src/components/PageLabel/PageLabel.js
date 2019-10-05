import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageLabel.css";

function PageLabel(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">RETRO-TRADE</h1>
                <p className="lead">This is where our tagline will go.</p>
            </div>
        </div>
    )
}

export default PageLabel;