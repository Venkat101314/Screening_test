import React from "react";
import Dashboard from "./dashboard/Dashboard";
import "../styles.css";
import Header from "./header/Header";
import { Grid } from "@mui/material";

const Home = () => {
  return (
 <Grid container direction={'column'}>
  <Grid ><Header/></Grid>
  <Grid ><Dashboard/></Grid>
 </Grid>
  ); 
};

export default Home;