import {
  Badge,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useStyle from "./style";
import { styled } from "@mui/material/styles";
import orderData from "./orderData";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../styles.css";
import bbasket from "../Images/bigbasket.png";

const OrderList = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      marginInlineStart:'-12px',
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  const classes = useStyle();
  const [query, setQuery] = useState("");
  const [searchTerms, setSearchTerms] = React.useState("");

  const updateOrderlist = orderData?.filter((item) => {
    if (searchTerms == "") {
      return item;
    } else if (item.id == searchTerms) {
      return item;
    }
  });

  return (
    <Grid container className={classes.orderMain}>
      <Grid className={classes.orderLogo}>
        <Typography variant="h5" className={classes.title}>
          BigBasket
        </Typography>
      </Grid>
      <Grid className={classes.orderSearch}>
        <TextField
          className={classes.searchField}
          size="small"
          color="primary"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setSearchTerms(e.target.value);
          }}
        />
      </Grid>
      <Grid className={classes.orderList}>
        {updateOrderlist.map((data, id) => (
          <li key={id}>
            <Grid container className={classes.orderData}>
              <Grid  alignItems={"center"} item xs={7}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  variant="dot"
                  st
                >
                  <h6>Order #{data.id}</h6>
                </StyledBadge>
              </Grid>
              <Grid item xs={5} className={classes.orderTime}>
                {time}
              </Grid>
              <Grid item xs={6}>
                Total ₹{data.price}
              </Grid>
              <Grid item xs={6} className={classes.orderTime}>
                Items :{data.item}
              </Grid>
            </Grid>
          </li>
        ))}
      </Grid>
      {/* <ul style={{     width: "100%", height:'74vh',
      overflowY: "scroll",
      scrollBehavior: "smooth",
      textDecoration: "none",
      listStyleType: "none",}}>
       {updateOrderlist.map((data, id) => (  
        <li>{data.id}</li>
       ))}
      </ul> */}
    </Grid>
  );
};

export default OrderList;
