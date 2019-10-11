import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageLabel.css";

function PageLabel(props) {
    return (
        <>
            <div className="jumbotronWrap">
                <div className="jumbotron">
                    <div className="innerJumbotron">
                        <h1>
                            RETRO-TRADE
                        </h1>
                        <h3>
                            THE TAG LINE WILL GO HERE!!!
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageLabel;