import React, { Component } from 'react';
import Items from '../uploads/Items';
import Button from '../Button/Button';
import { Link } from "react-router-dom";

class AddEditForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
      }
    
    render() {

        return (
            <div className="container center-align">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col l12 m12 s12">
                                <input id="item_name" type="text" className="validate" />
                                <label htmlFor="name">Item Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12 m6 l5">
                            <i class="small material-icons prefix">attach_money</i>
                                <input id="item_price" type="number" className="validate" />
                                <label htmlFor="price">Enter Price</label>
                            </div>
                            <div className="input-field col s12 m6 l7">                      
                                <select>
                                <option value="" disabled selected>Choose a Category</option>
                                <option value="1">Video Games</option>
                                <option value="2">Game Consoles</option>
                                <option value="3">Game Accessories</option>
                                <option value="4">Board Games</option>
                                <option value="5">Arcade</option>
                                </select>
                                <label>Category</label>                    
                            </div>
                        </div>

                        <div className="row">          
                            <div className="input-field col l12 m12 s12">
                                <textarea id="item_description" className="materialize-textarea validate"></textarea>
                                <label htmlFor="desc">Item description</label>
                            </div>
                        </div>

                        <div className="row">
                            <Items />
                        </div>
                        <Button label="Submit" icon="check" type="submit" />                      
                    </form>
            </div>
        )
    }
}

export default AddEditForm;