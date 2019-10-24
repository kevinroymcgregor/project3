import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import "../ItemCard/ItemCard.css";


const ItemCard = (props) => {
    return (

        <div className="itemCard">
            <div className="itemCardImage">

                <img src={props.itemImages} alt="placeholder" />
            </div>
            <div className="itemCardInfoGroup">
                <p className="itemName">{props.itemName}<span className="right itemCardPrice">${props.itemPrice}</span></p>
                <hr></hr>
                <div className="itemPriceLocationGroup">
                    <p className="itemPrice">${props.itemPrice}</p>
                    <p className="itemCategory">{props.itemCategory}</p>
                    <p className="itemLocation">{props.itemLocation}</p>
                </div>
                <p className="itemDescription">{props.itemDescription}</p>
                <hr></hr>
                <div className="buttonGroup">
                    <Link to={`/itemdetails/${props.itemID}`}>
                    <Button 
                        label="Details" 
                        icon="search" 
                        itemId={props.itemId}
                        />
                    </Link>
                    {/* <Button label="Message" icon="message" /> */}
                    <Link to={`/shopping-cart`} className="itemCardCartButton">
                    <Button 
                        label="Cart" 
                        icon="add_shopping_cart" 
                        itemId={props.itemId}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard; 