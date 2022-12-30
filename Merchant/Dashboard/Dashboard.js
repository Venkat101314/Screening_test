import { Grid } from '@mui/material'
import React from 'react'
import useStyle from './style'
import OrderList from "../OrderList/OrderList";
import DataTable from "../DataTable/DataTable";
import Widgets from "../Widgets/Widgets"

const Dashboard = () => {
  const classes= useStyle();
  return (
   <Grid container>
    <Grid xs={2}className={classes.orderGrid}><OrderList/></Grid>
    <Grid xs={8}className={classes.tableGrid}><DataTable/></Grid>
    <Grid xs={2}className={classes.widgetsGrid}>Widgets</Grid>
   </Grid>
  )
}

export default Dashboard