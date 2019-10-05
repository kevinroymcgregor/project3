import React, { Component } from 'react';
// import M from "materialize-css";

class AddEditForm extends Component {

    // componentDidMount() {
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('select');
    //         var instances = M.FormSelect.init(elems);
    //       });
    // }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Item name" id="item_name" type="text" className="validate" />
                                <label for="item_name">What are you selling?</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="item_price" type="number" className="validate" placeholder="Enter Price" />
                                <label for="item_price">Price</label>
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="input-field col s6">
                                <textarea id="item_description" className="materialize-textarea" placeholder="Item description..."></textarea>
                                <label for="textarea1">Description</label>
                            </div>


                            {/* <div class="input-field col s6">
                                <select>
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>Materialize Select</label>
                            </div> */}

                            <div className="input-field col s6">
                                <textarea id="item_category" className="materialize-textarea" placeholder="Category"></textarea>
                                <label for="textarea1">Category</label>
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