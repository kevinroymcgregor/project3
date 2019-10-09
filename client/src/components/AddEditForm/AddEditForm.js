import React, { Component } from 'react';

class AddEditForm extends Component {
    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Item name" id="item_name" type="text" className="validate" />
                                
                            </div>
                            <div className="input-field col s6">
                                <input id="item_price" type="number" className="validate" placeholder="Enter Price" />
                                
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="input-field col s6">
                                <textarea id="item_description" className="materialize-textarea" placeholder="Item description..."></textarea>
                                
                            </div>

                            <div className="input-field col s6">
                                <textarea id="item_category" className="materialize-textarea" placeholder="Category"></textarea>
                                
                            </div>
                        </div>

                        <div className="row">
                            <form action="#">
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddEditForm;