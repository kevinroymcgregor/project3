import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Button/Button';

const ItemDetailsCard = (props) => {

    return (
        
                <div className="card details-card">
                    <div className="card-content">
                        <span className="card-title"><h5 className="left">{props.itemName}</h5><h5 className="right">{props.itemPrice}</h5></span>
                    </div>
                    <div className="card-content">   
                        <p>{props.itemDescription}</p>
                    </div>
                    <div className="card-content">
                    <p className="center"><strong>Listed Date: </strong>{props.itemDate} - <strong>Located: </strong>{props.itemLocation}</p>
                    </div>
                    <div className="card-action">
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
