import React from 'react';
import AddEditForm from '../AddEditForm/AddEditForm';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";

function AddEditItem () {
    return (
        <>
        <Navbar />
        <div className="back-to-dashboard">
            <Link to="/dashboard">
                Back to Item...
            </Link>
        </div>
        <AddEditForm />

        </>
    )
}

export default AddEditItem;