import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import '../ItemDetailsCard/ItemDetailsCard.css';

const ItemDetailsCard = (props) => {
    // console.log(props)
    return (
        
                <div className="card details-card">
                    <div className="card-content item-details-header">
                        <div className="card-title">
                            <h5 className="">{props.itemName}
                            <span className="right">{props.itemPrice}</span></h5>
                        </div>
                    </div>
                    <div className="card-content">   
                        <p>{props.itemDescription}</p>
                    </div>
                    <div className="card-content">
                    <p className="center"><strong>Listed Date: </strong>{props.itemDate} - <strong>Location: </strong>{props.itemLocation}</p>
                    </div>
                    <div className="card-action center-align">
                        <Link to="#">
                        <Button label="Buy" icon="attach_money" />
                        </Link>

                        <Link to="#">
                        <Button label="trade" icon="compare_arrows" />
                        </Link>

                        <Link to="#">
                        <Button label="Message" icon="message" />
                        </Link>
                        
                    </div>
                </div>
    )

}

export default ItemDetailsCard;
