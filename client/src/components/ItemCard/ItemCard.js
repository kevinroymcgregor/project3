import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import "../ItemCard/ItemCard.css";
import AxiosAPI from "../../utils/axios"

const ItemCard = (props) => {

    addToCart = (id) => {
        AxiosAPI.addItemToCart(id);
    }

    return (

        <div className="itemCard">
            <div className="itemCardImage">

                <img src={props.itemImages} alt="placeholder" />
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
                    <Link to={`/itemdetails/${props.itemID}`}>
                        <Button
                            label="Details"
                            icon="search"
                            itemId={props.itemId}
                        />
                    </Link>
                    <Button label="Message" icon="message" />
                    <Link to={`/shopping-cart`}>
                        <Button
                            label="Add to Cart"
                            icon="add_shopping_cart"
                            itemId={props.itemId}
                            onClick={this.addToCart}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard; 