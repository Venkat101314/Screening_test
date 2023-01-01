import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";
import useStyle from "./style";
import Header from "../Header/Header";
import { Delete, Edit } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import UserLogo from "../user.jpg"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
};

const AdminPanel = styled.form`  
   width: 100%; 
     height: 100%; 
     background-color: #f1f1f1; 
     padding-block: 10px; 
     padding-inline: 10px; 
   `;
const Banner = styled.div`  width: 100%; 
     height: 10vh; 
     padding-inline:20px; 
     background-color: white; 
     textAlign: 'center';
   display:flex;
     -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2,  1) 0ms; 
     border-radius: 4px; 
     box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),  0px 1px 3px 0px rgb(0 0 0 / 12%); 
   `;

const DataTable = styled.div`
  width: 100%;
  height: 74vh;
  margin-top: 15px;
  background-color: white;
  display: flex;
  textalign: "center";
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const PartnerPage = () => {
  const classes = useStyle();
  const [userData, setUserData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const getUserData = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUserData(res.data.users);
        console.log(res.data.users);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUserData();
  }, []);

const onPartnerCreate = () =>{
  
}

  const columns = [
    {
      field: "sno",
      headerName: "S.no",
      flex: 0.3,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      sortable: false,
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "logo",
      headerName: "Logo",
      flex: 0.4,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
      renderCell: (params) => {
        return <Avatar src={params.value} sx={{ width: 46, height: 40 }} />;
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
    },

    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
      renderCell: (params) => {
        return (
          <Grid container xs={12} sx={{ justifyContent: "center" }}>
            <Grid item xs={3}>
              <Button
              // onClick={}
              >
                {" "}
                <Edit
                  sx={{
                    color: "#1976d2",
                  }}
                />
              </Button>

              <Button>
                <Delete sx={{ color: "#d11a2a" }} />{" "}
              </Button>

              <Dialog aria-labelledby='responsive-dialog-title'>
                <DialogTitle id='responsive-dialog-title'>
                  {"Are you sure want to delete?"}
                </DialogTitle>
                <DialogActions>
                  <Button autoFocus>  Cancel  </Button>
                  <Button autoFocus>  Delete </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        );
      },
    },
  ];

  const Row = userData?.map((item, idx) => ({
    id: item.id,
    sno: ++idx,
    name: item?.username,
    logo: item?.image,
    email: item?.email,
  }));

  const validation = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),

    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),

    username: yup.string("Enter a name").required("Username is required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validation,
    onSubmit: onPartnerCreate,
  });

  return (
    <Box>
      <Header />
      <AdminPanel>
        <Banner>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography className={classes.partnerTitle}>
              Partner Creation
            </Typography>
            <Button
              variant='contained'
              className={classes.addButton}
              onClick={() => setOpenDialog(true)}
            >
              Add Partner
            </Button>
          </Grid>

         
          <Dialog
            open={openDialog}
            className={classes.dialogBox}
            fullScreen='xl'
            maxwidth='xl'
            aria-labelledby='responsive-dialog-title'
          >
            <DialogTitle className={classes.dialogBoxTitle}>
              <Typography>Partner Creation</Typography>
              <IconButton onClick={() => setOpenDialog(false)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogBoxContent} dividers>
              <Grid container>
                <Grid item xs={6}>
                 <div className='d-flex'>
                   <Grid item xs={6}>
                    {status ? (
                      imageUrl &&
                      selectedImage && (
                        <Box
                          marginRight={2}
                          textAlign='center'
                          sx={{ border: "1px solid black" }}
                        >
                          <div>Image Preview:</div>
                          <img
                            src={imageUrl}
                            alt={selectedImage.name}
                            height='100px'
                          />
                        </Box>
                      )
                    ) : (
                      <Box
                        marginRight={2}
                        textAlign='center'
                        sx={{ border: "1px solid black" }}
                      >
                        <div>Image Preview:</div>
                        <img src={UserLogo} height='100px' />
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      accept='image/*'
                      type='file'
                      id='select-image'
                      style={{ display: "none" }}
                      onChange={(e) => {
                        setSelectedImage(e.target.files[0]);
                        setStatus(true);
                      }}
                    />
                    <label htmlFor='select-image'>
                      <Button
                        variant='contained'
                        color='primary'
                        component='span'
                      >
                        Upload Image
                      </Button>
                    </label>            
                  </Grid>
                 </div>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id='username'
                    label='Name'
                    name='username'
                    size='small'
                    fullWidth
                    className='mb-2'
                    value={formik.values.username}
                    onChange={formik?.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                  <TextField
                    id='email'
                    label='Email'
                    name='email'
                    type='email'
                    size='small'
                    className='my-2'
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                     
                  <TextField
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    size='small'
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && formik.errors.password}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                variant='contained'
                color='info'
                className={classes.addButton}
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button variant='contained' className={classes.addButton}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Banner>

        <DataTable>
          <Box
            sx={{
              height: 450,
              width: "100%",
              "& .super-app-theme--header": {
                backgroundColor: "#1976d2",
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
              },
              "& .super-app-theme--cell": {
                fontSize: "17px",
                fontFamily: "Fira Sans",
              },
            }}
          >
            <DataGrid
              headerHeight={40}
              rowHeight={40}
              rows={Row}
              getRowId={(row) => row.sno}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              disableColumnFilter
              disableColumnMenu
              experimentalFeatures={{
                newEditingApi: true,
              }}
            />
                     
          </Box>
        </DataTable>
      </AdminPanel>
    </Box>
  );
};

export default PartnerPage;
