import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { Grid } from "@mui/material";


const columns = [
  {
    field: "id",
    headerName: "S.no",
    editable: false,
    flex:0.3,
    headerAlign: "center",
    align:'center',
    headerClassName: "super-app-theme--header",
    sortable: false,
      cellClassName: 'super-app-theme--cell',
  },
  {
    field: "merchant_name",
    headerName: "Merchant Name",
    flex:1,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    sortable: false 
  },

  
  {
    field: "address",
    headerName: "Address",
    flex:1,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    sortable: false 
  },
  {
    field: "mobile",
    headerName: "Mobile",
    flex:0.6,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    sortable: false 
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    flex:1,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    sortable: false 
  },
  {
    field: "active_status",
    headerName: "Status",
    flex:0.5,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    sortable: true 
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    flex:0.7,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    cellClassName: 'super-app-theme--cell',
    sortable: false ,
    renderCell: (params) => {
      return (
     
        <Grid container xs={12} sx={{justifyContent:"center"}}>
          <Grid item xs={3} ><Edit sx={{color:"#1976d2"}}/> <Delete sx={{color:"#d11a2a"}}/></Grid>
        
        </Grid>
      );
    },
  }
];

const rows = [{ id: 1, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 2, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 3, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 4, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 5, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 6, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 7, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 8, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 9, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" },
{ id: 10, merchant_name: "Jon Snow", email: "Jonsnow@gmail.com", active_status: "active", address:"xyz street,",mobile:"1234567890" }
];

export default function DataGridDemo() {
  
  return (
    <Box
      sx={{
        height: 458,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "#1976d2",
          fontSize:"16px",
          fontWeight:'bold',
          color: 'white'
        },
        "& .super-app-theme--cell":{
          fontSize:"17px",
          fontFamily:"Fira Sans"
        },
      
      }}
    >
      <DataGrid
      headerHeight={40}
      rowHeight={40}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnFilter
        disableColumnMenu 
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
