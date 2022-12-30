import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import * as yup from "yup";
import PersonIcon from "../Merchant/Images/upload.png";
import Header from "./Header";
import DataTable from "./InfoTable";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
};

const UserForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 0.5%;
  padding-inline: 2%;
`;
const Items = styled.div`
  width: 100%;
  height: fit-content;
  padding:1%;
  background-color: white;
  textAlign: 'center',
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Data = styled.div`
width: 100%;
height: 100%;
margin-top:1%;
background-color: white;
display: flex;
textAlign: 'center',
-webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
border-radius: 4px;
box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
  0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
// const thumbsContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   marginTop: 16
// };

// const thumb = {
//   display: 'inline-flex',
//   borderRadius: 2,
//   border: '1px solid #eaeaea',
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: 'border-box',
//   backgroundColor:'#f1f1f1'
// };

// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden'
// };

const PartnerPanel = () => {
  const token = localStorage.getItem("Bearer");

  const [data, setData] = React.useState([]);
  const [image, setImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(true);
  const [user, setUser] = React.useState("");
  const [userId, setUserId] = React.useState(null);
  const [confirm, setConfirm] = React.useState(false);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      // onDrop: acceptedFiles => {
      //   setFiles(acceptedFiles.map(file => Object.assign(file, {
      //     preview: URL.createObjectURL(file)
      //   })));
      // }
    });

  // const thumbs = files.map(file => (
  //   <div style={thumb} key={file.name}>
  //     <div style={thumbInner}>
  //       <img
  //         src={file.preview}
  //         style={{ width: "100%", height: "100%" }}
  //         // Revoke data uri after image is loaded
  //         onLoad={() => { URL.revokeObjectURL(file.preview) }}
  //       />
  //     </div>
  //   </div>
  // ));

  // React.useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  // }, []);

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>File Selected : {file.path}</li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      <ul>
        {errors.map((e) => (
          <li key={e.code} style={{ color: "red" }}>
            {e.message}
          </li>
        ))}
      </ul>
    </li>
  ));

  const OngetPartner = () => {
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
  }

  React.useEffect(() => {
    OngetPartner()
  }, []);

  const handleSubmit = (e) => {
    const formData = new FormData();
    acceptedFiles.map((file) => formData.append("logo", file));

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
        console.log(res);  
        OngetPartner();
        setOpen(false);
        alert("Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (e) => {
    const userData = new FormData();

    acceptedFiles.map((file) => userData.append("logo", file));

    userData.append("name", formik.values.username);
    userData.append("password", formik.values.password);
    userData.append("email", formik.values.email);
    userData.append("is_active", "true");
    console.log(userData);

    axios
      .put(`http://192.168.0.132:8001/panelapi/partner/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);  
        OngetPartner()
        setOpen(false);
        alert("Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (e) => {
    axios
      .delete(`http://192.168.0.132:8001/panelapi/partner/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {       
        OngetPartner()
        alert("Deleted Successfully")
      })
      .catch((err) => console.log(err));
    setConfirm(false);
  };

  const updatePartner = (e) => {
    setUser(e.row.name);
    setImage(e.row.logo);
    setStatus(false);
    setUserId(e.row.id);
    // console.log(e.row.id)
  };

  const handleFileSelect = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

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
      field: "logo",
      headerName: "Logo",
      type: "file",
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
                  updatePartner(params);
                }}
              >
                <Edit sx={{ color: "#1976d2" }} />
              </Button>
              <Button
                onClick={() => {
                  setConfirm(true);
                  updatePartner(params);
                }}
              >
                {" "}
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
                  <Button onClick={handleDelete} autoFocus>
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
  }));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validation,
    onSubmit: handleSubmit,
  });

  return (
    <Box>
      <Header />
      <UserForm>
        <Items>
          <div
            className="d-flex justify-content-between"
            style={{ alignItems: "center" }}
          >
            <Typography fontSize={"16px"} fontFamily={"Fira Sans"}>
              Partner Creation
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "22px",
                lineHeight: "1rem",
                paddingBlock: "10px",
              }}
              onClick={() => {
                setOpen(true);
                setStatus(true);
              }}
            >
              Add Partner
            </Button>
          </div>
          <Modal
            keepMounted
            open={open}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            style={{ borderRadius: "10px" }}
          >
            <Box sx={style}>
              <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  backgroundColor: "#1976d2",
                  paddingInline: "2%",
                  paddingBlock: "1%",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              >
                <Typography variant={"h7"} fontFamily={"Fira Sans"}>
                  {status === true ? "Partner Creation" : "Update Partner"}
                </Typography>
                <p style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
                  <b>X</b>
                </p>
              </div>

              <div className="m-4">
                <Grid container>
                  <Grid item xs={6}>
                    {/* DropZone */}
                    <section className="container">
                      <div
                        {...getRootProps({ className: "dropzone" })}
                        style={{
                          padding: "2%",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#f1f1f1",
                            borderRadius: "15px",
                            padding: "2%",
                            width: 100,
                            height: 100,
                          }}
                        >
                          <img
                            style={{ width: "100%", height: "100%" }}
                            src={PersonIcon}
                          ></img>
                        </div>
                        <div className="ms-3">
                          <aside className="mt-2">
                            <ul>
                              {status === true ? acceptedFileItems : image}
                            </ul>
                            <ul>{fileRejectionItems}</ul>
                          </aside>
                          <p>File types: PNG, JPG, JPEG</p>
                          <em>(Maximum file size: 2 MB)</em>
                          <Button
                            className="mt-2"
                            variant="contained"
                            sx={{
                              borderRadius: "22px",
                              paddingBlock: "8px",
                              lineHeight: "1rem",
                            }}
                            type="file"
                          >
                            UPLOAD <input {...getInputProps()} />
                          </Button>
                        </div>
                      </div>
                    </section>
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
                        formik.touched.username &&
                        Boolean(formik.errors.username)
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
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  marginTop={"2%"}
                >
                  <Button
                    variant="contained"
                    className="mx-2"
                    onClick={() => setOpen(false)}
                    sx={{
                      borderRadius: "22px",
                      paddingBlock: "10px",
                      lineHeight: "1rem",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    className="mx-2"
                    sx={{
                      borderRadius: "22px",
                      paddingBlock: "10px",
                      lineHeight: "1rem",
                    }}
                    onClick={status ? formik.handleSubmit : handleUpdate}
                  >
                    {status ? "Save" : "Update"}
                  </Button>
                </Grid>
              </div>
            </Box>
          </Modal>
        </Items>

        <Data>
          <Box
            sx={{
              height: 458,
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
              pageSize={7}
              rowsPerPageOptions={[7]}
              disableSelectionOnClick
              disableColumnFilter
              disableColumnMenu
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </Data>
      </UserForm>
    </Box>
  );
};

export default PartnerPanel;
