import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Grid, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import useStyle from './style';
import Logout from "../Images/user.jpg";


const Header = () => {
  const classes = useStyle()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)
  const navigate = useNavigate();
  const loggedOut=()=>{
    localStorage.clear();
    return navigate("/")
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Grid container className={classes.headerMain}>
        
       <Grid style={{display:'flex',alignItems:'center'}}>
        <Avatar 
          src="https://kovaipazhamudir.com/kpn-assets/img/kpn-logo.png"
          variant='square'
          className={classes.logo}
        />
        <Typography className={classes.Headertxt}>Pazhamudir Nilayam</Typography>
       </Grid>

       <Grid style={{display:'flex',alignItems:'center'}}>

         <Menu
           id="basic-menu"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           MenuListProps={{
          'aria-labelledby': 'basic-button',
          }}
         >         
          <MenuItem onClick={handleClose} >Logout</MenuItem>
         </Menu>
         <Link to="/admin">
           <Typography className={classes.HeaderSubtxt}>Dashboard</Typography>
         </Link>

         <Link to="/product">
           <Typography className={classes.HeaderSubtxt}>ProductUpload</Typography>
         </Link>

         <Link to="/rate">
           <Typography className={classes.HeaderSubtxt}>RateSet</Typography>
         </Link>

         <Link to="/item">
           <Typography className={classes.HeaderSubtxt}>ItemStatus</Typography>
         </Link>

         <Link to="/reports">
           <Typography className={classes.HeaderSubtxt}>Reports</Typography>
         </Link>

         <Avatar
          src={Logout}
          className={classes.Headerlogout}
          onClick={loggedOut}/>

       </Grid>

      </Grid>   
  );
};

export default Header;