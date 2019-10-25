import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import axios from 'axios';
// import "../ItemCard/ItemCard.css";


class SellerItemCard extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.put('/api/items/deleteItem/'+ this.props.itemID)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))

            window.location = '/profile'
    }

    render () {

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
                </div>
                <p className="itemDescription">{this.props.itemDescription}</p>
                <hr></hr>
                <div className="buttonGroup">
                    <Link to={`/itemdetails/${this.props.itemID}`}>
                        <Button
                            label="Details"
                            icon="search"
                            itemId={this.props.itemId}
                            className="sellerButton"
                        />
                    </Link>
                    <div className="waves-effect waves-light btn-small btn-flat buttons" onClick={this.delete}><i className="material-icons right">delete</i>Delete</div>

                    {/* <button label="Delete" icon="delete" className="sellerButton" onClick={this.delete}>delete</button> */}
                </div>
            </div>
        </div>
    )
    }
}

export default SellerItemCard;
