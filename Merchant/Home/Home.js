import { Grid } from "@mui/material";
import React from "react";
import useStyle from "./style";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  const classes = useStyle();
  return (
    <Grid container direction={"column"} className={classes.gridContainer}>
      <Grid className={classes.gridHeader}>
        <Header />
      </Grid>
      <Grid className={classes.gridDashboard}>
        <Dashboard />
      </Grid>
    </Grid>
  );
};

export default Home;
