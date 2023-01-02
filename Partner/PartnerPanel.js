import {
  Avatar,
  Box,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import UserLogo from "../../Merchant/Images/upload.png";
import Header from "../Header";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import useStyle from "./style";

const UserForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding-block: 10px;
  padding-inline: 10px;
`;
const Items = styled.div`
  height: 10vh;
  padding-inline: 20px;
  background-color: white;
  textalign: "center";
  display: flex;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Data = styled.div`
  width: 100%;
  height: 74vh;
  margin-top: 15px;
  background-color: white;
  display: flex;
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const PartnerPanel = () => {
  const token = localStorage.getItem("Bearer");
  const classes = useStyle();
  const [data, setData] = React.useState([]);//UserData
  const [open, setOpen] = React.useState(false);//Dialog Box
  const [status, setStatus] = React.useState(true);//Image value
  const [userId, setUserId] = React.useState(null);
  const [confirm, setConfirm] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [flag, setFlag] = useState(false);//check create or update

  React.useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const getPartnerData = () => {
    axios
      .get("http://192.168.0.132:8001/panelapi/partner", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.response);
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  React.useEffect(() => {
    getPartnerData();
  }, []);

  const onCreatePartner = (e) => {
 
    const formData = new FormData();
    formData.append("logo", selectedImage);

    formData.append("name", formik.values.username);
    formData.append("password", formik.values.password);
    formData.append("email", formik.values.email);
    formData.append("is_active", "true");
    console.log(formData);
    axios
      .post("http://192.168.0.132:8001/panelapi/partner", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(selectedImage);
        getPartnerData();
        setOpen(false);
        alert("Uploaded Successfully");
        formik.resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePartner = (e) => {
    const userData = new FormData();

    userData.append("logo", selectedImage);

    userData.append("name", formik.values.username);
    userData.append("password", formik.values.password);
    userData.append("email", formik.values.email);
    userData.append("is_active", "true");
    // console.log(userData);

    axios
      .put(`http://192.168.0.132:8001/panelapi/partner/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        getPartnerData();
        setOpen(false);
        alert("Updated Successfully");
        formik.resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePartner = (e) => {
    axios
      .delete(`http://192.168.0.132:8001/panelapi/partner/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getPartnerData();
        alert("Deleted Successfully");
      })
      .catch((err) => console.log(err));
    setConfirm(false);
  };

  const handlePartner = (e) => {
    setStatus(false);
    setImageUrl(`http://192.168.0.132:8001/media/${e.row.logo}`);

    setUserId(e.row.id);
    console.log(e);
    formik.setFieldValue("username", e.row.name);
    formik.setFieldValue("email", e.row.email);
  };

  const validation = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required")
      .test('email', 'Email already in use',
      function (value) {
        return new Promise((resolve, reject) => {
if(Row.email!=value){
  resolve(true)
}
else{
  reject(true); 
}
        })
    }
),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    username: yup.string("Enter a name").required("Username is required!"),
  });

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
      type: "file",
      flex: 0.4,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
      renderCell: (params) => {
        return (
          <Avatar
            src={`http://192.168.0.132:8001/media/${params.value}`}
            sx={{ width: 46, height: 40 }}
          />
        );
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
                onClick={() => {
                  setOpen(true);
                  handlePartner(params);
                }}
              >
                <Edit sx={{ color: "#1976d2" }} />
              </Button>
              <Button
                onClick={() => {
                  setConfirm(true);
                  handlePartner(params);
                }}
              >
                <Delete sx={{ color: "#d11a2a" }} />
              </Button>

              <Dialog
                open={confirm}
                onClose={() => setConfirm(false)}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Are you sure want to delete?"}
                </DialogTitle>
                <DialogActions>
                  <Button autoFocus onClick={() => setConfirm(false)}>
                    Cancel
                  </Button>
                  <Button onClick={deletePartner} autoFocus>
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        );
      },
    },
  ];

  const Row = data?.map((item, idx) => ({
    id: item.id,
    sno: ++idx,
    name: item?.name,
    logo: item?.logo,
    email: item?.email,
  }));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validation,
    validateOnChange: false ,
    onSubmit: onCreatePartner,
  });

  return (
    <Box>
      <Header />
      <UserForm>
        <Items>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography className={classes.partnerTitle}>
              {flag ? "Partner Creation" : "Update Partner"}
            </Typography>
            <Button
              className={classes.addButton}
              variant="contained"
              onClick={() => {
                setOpen(true);
                setStatus(true);
                formik.resetForm();
              }}
            >
              Add Partner
            </Button>
          </Grid>
          <Dialog
            open={open}
            className={classes.dialogBox}
            fullScreen="xl"
            maxwidth="xl"
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle className={classes.dialogBoxTitle}>
              <Typography>
                {status === true ? "Partner Creation" : "Update Partner"}
              </Typography>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogBoxContent} dividers>
              <Grid container>
                <Grid item xs={6}>
                  {/* DropZone */}
                  <div className="d-flex">
                    <Grid item xs={6}>
                      {flag ? (
                        imageUrl &&
                        selectedImage && (
                          <Box
                            marginRight={2}
                            textAlign="center"
                            sx={{ border: "1px solid black" }}
                          >
                            <div>Image Preview:</div>
                            <img
                              src={imageUrl}
                              alt={selectedImage.name}
                              height="100px"
                            />
                          </Box>
                        )
                      ) : (
                        <Box
                          marginRight={2}
                          textAlign="center"
                          sx={{ border: "1px solid black" }}
                        >
                          <div>Image Preview:</div>
                          <img
                            src={status ? UserLogo : imageUrl}
                            height="100px"
                          />
                        </Box>
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <input
                        accept="image/*"
                        type="file"
                        id="select-image"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          setSelectedImage(e.target.files[0]);
                          setFlag(true);
                        }}
                      />
                      <label htmlFor="select-image">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          Upload Image
                        </Button>
                      </label>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={6} rowSpacing={3}>
                  <TextField
                    id="username"
                    label="Name"
                    name="username"
                    size="small"
                    fullWidth
                    className="mb-2"
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
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    size="small"
                    className="my-2"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                  />

                  <TextField
                    id="password"
                    label="Password"
                    className="my-2"
                    name="password"
                    type="password"
                    size="small"
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
                variant="contained"
                color="info"
                className={classes.addButton}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={status ? formik.handleSubmit : updatePartner}
                variant="contained"
                className={classes.addButton}
              >
                {status ? "Save" : "Update"}
              </Button>
            </DialogActions>
          </Dialog>
        </Items>

        <Data>
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
        </Data>
      </UserForm>
    </Box>
  );
};

export default PartnerPanel;
