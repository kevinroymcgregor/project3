import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import '../ItemDetailsCard/ItemDetailsCard.css';

const ItemDetailsCard = (props) => {
    // console.log(props)
    return (

        <div className="card details-card itemDetailsCard">
            <div className="card-content item-details-header">
                <div className="card-title">
                    <h5 className="itemDetailsNameText">{props.itemName}
                        <span className="right">{props.itemPrice}</span></h5>
                </div>
            </div>

            <hr style={{ marginTop: "10px", marginLeft: "8%", marginRight: "8%" }}></hr>

            <div className="card-content itemDetailsDateLocationDiv">
                <div className="itemDetailsDate">
                    <p>Listed Date: {props.itemDate}</p>
                </div>
                <div>
                    <p>Category: {props.itemCategory}</p>
                </div>
                <div>
                    <p>Location: {props.itemLocation}</p>
                </div>
            </div>
            <div className="card-content">
                <p>{props.itemDescription}</p>
            </div>

            <hr style={{ marginTop: "10px", marginLeft: "8%", marginRight: "8%" }}></hr>

            <div className="card-action center-align itemDetailsButton">
                <Link to="#">
                    <Button label="Make Offer" icon="attach_money" />
                </Link>
            </div>
        </div>
    )

}

export default ItemDetailsCard;
