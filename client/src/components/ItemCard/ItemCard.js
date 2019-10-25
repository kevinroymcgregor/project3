import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import "../ItemCard/ItemCard.css";
import AxiosAPI from "../../utils/axios"

class ItemCard extends Component {
    // const ItemCard = (props) => {

    addToCart = (id) => {
        AxiosAPI.addItemToCart(id);
    }

    render() {
        return (

            <div className="itemCard">
                <div className="itemCardImage">

                <img src={this.props.itemImages} alt="placeholder" />
            </div>
            <div className="itemCardInfoGroup">
                <p className="itemName">{this.props.itemName}<span className="right itemCardPrice">${this.props.itemPrice}</span></p>
                <hr></hr>
                <div className="itemPriceLocationGroup">
                    <p className="itemPrice">${this.props.itemPrice}</p>
                    <p className="itemCategory">{this.props.itemCategory}</p>
                    <p className="itemLocation">{this.props.itemLocation}</p>
                </div>
                <p className="itemDescription">{this.props.itemDescription}</p>
                <hr></hr>
                <div className="buttonGroup">
                    <Link to={`/itemdetails/${this.props.itemID}`}>
                    <Button 
                        label="Details" 
                        icon="search" 
                        itemId={this.props.itemId}
                        />
                    </Link>
                    {/* <Button label="Message" icon="message" /> */}
                    <Link to={`/shopping-cart`} className="itemCardCartButton">
                    <Button 
                        label="Cart" 
                        icon="add_shopping_cart" 
                        itemId={this.props.itemId}
                        />
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

export default ItemCard; 