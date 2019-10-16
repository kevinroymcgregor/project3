import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import "../ItemCard/ItemCard.css";


const ItemCard = (props) => {
    return (

        <div className="itemCard">
            <div className="itemCardImage">
                <img src="https://via.placeholder.com/1000" alt="placeholder" />
            </div>
            <div className="itemCardInfoGroup">
                <p className="itemName">{props.itemName}</p>
                <hr></hr>
                <div className="itemPriceLocationGroup">
                    <p className="itemPrice">${props.itemPrice}</p>
                    <p className="itemCategory">{props.itemCategory}</p>
                    <p className="itemLocation">{props.itemLocation}</p>
                </div>
                <p className="itemDescription">{props.itemDescription}</p>
                <hr></hr>
                <div className="buttonGroup">
                    <Link to="/itemdetails">
                    <Button 
                        label="Details" 
                        icon="search" 
                        itemId={props.itemId}
                        />
                    </Link>
                    <Button label="Message" icon="message" />
                    <Button label="Make Offer" icon="attach_money" />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;