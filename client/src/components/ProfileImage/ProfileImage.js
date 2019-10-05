import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
        width: 150,
        height: 150,
    },
});

const ProfileImage = (props) => {
    const classes = useStyles();

    // const [values, setValues] = React.useState({
    //     name: 'Username',
    //     Location: 'Chandler, Arizona, United States',
    // });

    // const handleChange = name => event => {
    //     setValues({ ...values, [name]: event.target.value});
    // };

    return (
        <div>
            <Grid container justify="center" alignItems="center" className="avatar-grid">
                <Avatar alt="User Name" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" className={classes.avatar} id="user-avatar" />
            </Grid>
        </div>
    )
};

export default ProfileImage;