import React, { Component } from 'react';
import axios from 'axios';
import Items from '../uploads/Items';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import '../AddEditForm/AddEditForm.css';

class AddEditForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        axios('/addItem', {
            method: 'POST',
            body: data,
          }).then(res => console.log(res.data));
        
      }
    
    render() {

        return (
            <div className="container center-align edit-form-bg">
                <Link to="/dashboard">
                    <Button label="Back To Home" icon="home" />
                </Link>
                <div className="post-header">
                <h4>Post an Item</h4>
                </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col l6 offset-l3 m6 offset-m3 s12">
                                <input id="item_name" type="text" className="validate" name="name" />
                                <label htmlFor="name">Item Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12 m3 offset-m3 l3 offset-l3">
                            <i className="small material-icons prefix">attach_money</i>
                                <input id="item_price" type="number" className="validate" name="price" />
                                <label htmlFor="price">Enter Price</label>
                            </div>
                            <div className="input-field col s12 m3 l3" name="stb">                      
                                <select>
                                <option value="" disabled selected>Choose one...</option>
                                <option value="1">Buy</option>
                                <option value="2">Sell</option>
                                <option value="3">Trade</option>
                                </select>
                                <label>Buy / Sell / Trade</label>                    
                            </div>
                        </div>

                        <div className="row">          
                            <div className="input-field col l6 offset-l3  m6 offset-m3 s12">
                                <textarea id="item_description" className="materialize-textarea validate" name="desc"></textarea>
                                <label htmlFor="desc">Item description</label>
                            </div>
                        </div>

                        <div className="row">
                            <Items />
                        </div>
                        <Button label="Submit" icon="check" />                      
                    </form>
            </div>
        )
    }
}

export default AddEditForm;