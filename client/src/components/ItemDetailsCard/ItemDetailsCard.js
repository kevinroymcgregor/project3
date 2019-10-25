import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import '../ItemDetailsCard/ItemDetailsCard.css';
import AxiosAPI from "../../utils/axios";

class ItemDetailsCard extends Component {
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
            <div className="card details-card itemDetailsCard">
                <div className="card-content item-details-header">
                    <div className="card-title">
                        <h5 className="itemDetailsNameText">{this.props.itemName}
                            <span className="right">{this.props.itemPrice}</span></h5>
                    </div>
                </div>

                <hr style={{ marginTop: "10px", marginLeft: "8%", marginRight: "8%" }}></hr>

                <div className="card-content itemDetailsDateLocationDiv">
                    <div className="itemDetailsDate">
                        <p>Listed Date: {this.props.itemDate}</p>
                    </div>
                    <div>
                        <p>Category: {this.props.itemCategory}</p>
                    </div>
                    <div>
                        <p>Location: {this.props.itemLocation}</p>
                    </div>
                </div>
                <div className="card-content">
                    <p>{this.props.itemDescription}</p>
                </div>

                <hr style={{ marginTop: "10px", marginLeft: "8%", marginRight: "8%" }}></hr>

                <div className="card-action center-align itemDetailsButton">
                    <Link to="#">
                        {/* <Button label="Make Offer" icon="attach_money" /> */}
                        <div className="waves-effect waves-light btn-small btn-flat buttons" 
                            onClick={this.addToCart}>
                            <i className="material-icons right">add_shopping_cart</i>
                            Purchase
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ItemDetailsCard;
