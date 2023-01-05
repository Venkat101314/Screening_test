import { Grid } from "@mui/material";
import React from "react";
import useStyle from "./style";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  const classes = useStyle();
  return (
    <Grid container  className={classes.gridContainer}>
      <Grid item xs={12} className={classes.gridHeader}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.gridDashboard}>
        <Dashboard />
      </Grid>
    </Grid>
  );
};

export default Home;
