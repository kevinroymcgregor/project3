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
                <div className="itemPriceLocationGroup">
                    <p className="itemPrice">Item Price</p>
                    <p className="itemLocation">Item Location</p>
                </div>
                <p className="itemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ante, sodales in viverra vel, cursus ullamcorper felis. Donec gravida.</p>
                <div className="buttonGroup">
                    <Button label="Button 1" />
                    <Button label="Button 2" />
                    <Button label="Button 3" />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;