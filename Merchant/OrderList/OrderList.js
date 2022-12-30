import { Badge, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import useStyle from "./style";
import orderData from "./orderData";
import SearchIcon from "@mui/icons-material"

const OrderList = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

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
    <Grid container direction={"column"} className={classes.orderMain}>
      <Grid className={classes.orderLogo}>logo</Grid>
      <Grid className={classes.orderSearch}>
      <TextField
      className={classes.searchField}
      size="small"
          label="With normal TextField"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      </Grid>
      <Grid className={classes.orderList}>
        {updateOrderlist.map((data, id) => (
          <li key={id}>
            <Grid container  className={classes.orderData}>
              <Grid xs={7}>
                <Badge
                  variant='dot'
                  color='success'
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}>
               
                  <h6>Order #{data.id}</h6>
                  </Badge>
              </Grid>
              <Grid xs={5} className={classes.orderTime}>{time}</Grid>
              <Grid xs={6}>Total ₹{data.price}</Grid>
            <Grid xs={6} className={classes.orderTime}>Items :{data.item}</Grid>
            </Grid>
          </li>
        ))}
      </Grid>
    </Grid>
  );
};

export default OrderList;
