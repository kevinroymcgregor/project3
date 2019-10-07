import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import "../ItemCard/ItemCard.css";

function ItemCard(props) {
    return (
        <div className="itemCard">
            <div className="itemCardImage">
                <img src="https://via.placeholder.com/1000" alt="placeholder" />
            </div>
            <div className="itemCardInfoGroup">
                <p className="itemName">This is an item name</p>
                <p className="itemDetailsPreview">These are items details</p>
                <div className="buttonGroup">
                    <button type="">button 1</button>
                    <button type="">button 2</button>
                    <button type="">button 3</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;