import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import "../ItemCard/ItemCard.css";
import AxiosAPI from "../../utils/axios"

class ItemCard extends Component {

    addToCart = () => {
        AxiosAPI.deleteItem(this.props.itemID)
            .then(
                function (res) {
                    alert(res.data);
                    window.location = '/dashboard';
                }
            )
    }

    render() {
        return (
            <div className="itemCard">
                <div className="itemCardImage">
                    <img src={this.props.itemImages} alt="placeholder" />
                </div>
                <div className="itemCardInfoGroup">
                    <p className="itemName">{this.props.itemName}</p>
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
                                itemID={this.props.itemID}
                            />
                        </Link>
                        <div className="waves-effect waves-light btn-small btn-flat buttons" 
                            onClick={this.addToCart}>
                            <i className="material-icons right">add_shopping_cart</i>
                            Purchase
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard; 