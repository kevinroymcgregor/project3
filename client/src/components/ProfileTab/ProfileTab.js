import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileDetailsCard from '../ProfileDetailsCard/ProfileDetailsCard';
import ItemCard from '../ItemCard/ItemCard';



function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return(
        <Typography 
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
                <Box p={3}>{children}</Box>
            </Typography>
    );
}

TabPanel.prototypes = {
    children: PropTypes.node,
    index: PropTypes.any.isReaquired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return{
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    bar: {
        backgroundColor: "#363636"
    },
  }));
  
const ProfileTab = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.bar}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Items for Sale" {...a11yProps(1)} />
            <Tab label="Watching" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
         <ProfileDetailsCard />
        </TabPanel>
        <TabPanel value={value} index={1}>
         <ItemCard />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ItemCard />
        </TabPanel>
      </div>
    );
  }

  export default ProfileTab;