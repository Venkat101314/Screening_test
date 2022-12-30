import { Alert, Button, Grid } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import React from "react";
import useStyle from "./style";
import OrderList from "../OrderList/OrderList";
import DataTable from "../DataTable/DataTable";
import Widgets from "../Widgets/Widgets";

const Dashboard = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item xs={2} className={classes.orderGrid}>
        <OrderList />
      </Grid>
      <Grid item xs={8} className={classes.tableGrid}>
        <Alert
          severity="success"
          action={
            <Grid container justifyContent={'space-between'}>
              <Grid item xs={6}>
                Order Id<br></br>Order Date<br></br>Total{" "}
              </Grid>
              <Grid item xs={4}>
                <Button color="inherit">
                  <PrintIcon />
                </Button>
              </Grid>
            </Grid>
          }
        >
          This is a success alert — check it out!
        </Alert>
        <DataTable />
      </Grid>
      <Grid item xs={2} className={classes.widgetsGrid}>
        <Widgets />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
