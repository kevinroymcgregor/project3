import React from 'react';
import { Link } from "react-router-dom";

const ItemDetailsCard = (props) => {

    return (
        
                <div className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">Item Name <small>- Date put on sale</small></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus feugiat mattis. Curabitur ut neque et quam commodo ultricies. Sed pretium et tortor eget suscipit. Morbi ut molestie erat. Nulla odio sapien, luctus vitae pretium ac, fringilla quis dolor. In non est in risus pulvinar auctor vel ut felis. Praesent in aliquet risus, sit amet vehicula tellus. Fusce dictum augue ultricies, tincidunt nisi eget, varius risus. Nam non ligula ut sapien elementum pretium at eget tortor.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus feugiat mattis. Curabitur ut neque et quam commodo ultricies. Sed pretium et tortor eget suscipit. Morbi ut molestie erat. Nulla odio sapien, luctus vitae pretium ac, fringilla quis dolor. In non est in risus pulvinar auctor vel ut felis. Praesent in aliquet risus, sit amet vehicula tellus. Fusce dictum augue ultricies, tincidunt nisi eget, varius risus. Nam non ligula ut sapien elementum pretium at eget tortor.</p>
                    </div>
                    <div className="card-action">
                        <Link to="#">

                        <div className="btn buy-trade">Buy</div>
                        </Link>
                        <Link to="#">

                        <div className="btn buy-trade">Trade</div>
                        </Link>
                    </div>
                </div>
    )

}

export default ItemDetailsCard;