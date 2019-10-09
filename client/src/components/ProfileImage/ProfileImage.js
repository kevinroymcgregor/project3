import React from 'react';
import './ProfileImage.css'



const ProfileImage = (props) => {

    const [values, setValues] = React.useState({
        name: 'Username',
        Location: 'Chandler, Arizona, United States',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value});
    };

    return (
        <div>
            <div className="container center-align">
                <img alt="User Name" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className="avatar center-align" id="user-avatar" />
            </div>
        </div>
    )
};

export default ProfileImage;