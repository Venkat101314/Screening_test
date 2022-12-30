import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { Grid, Button, Modal, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "./Dropzone";
import { useState } from "react";

export default function DataGridDemo() {
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem("Bearer");
  const [image, setImage] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [opn,setOpn] = useState(false)

  const [user, setUser]= React.useState("")
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
  React.useEffect(() => {
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
  }, []);
   
  React.useEffect(()=>{
   setOpen(false)
  },[])

  const handleUpdate = (e) => {  
    setUser(e.row.name);
  console.log(e.row.name)
  };
const text = user;
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("logo", image);
    formData.append("name", formik.values.username);
    formData.append("password", formik.values.password);
    formData.append("email", formik.values.email);
    formData.append("is_active", "true");

    axios
      .patch("http://192.168.0.132:8001/panelapi/partner/:id", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
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
      headerName: "Email",
      type: "email",
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
              <Button onClick={()=>{setOpen(true);handleUpdate(params);}}>
                <Edit sx={{ color: "#1976d2" }} />
              </Button>
              <Delete sx={{ color: "#d11a2a" }} />
            </Grid>
          </Grid>
        );
      },
    },
  ];
   const Row = data?.map((item,idx) => (
       {
        sno:++idx,
        name:item?.name,
        logo:item?.logo,        
       }
   ))
   const formik = useFormik({
    initialValues: {
      email: "",
      username: user,
      password:""

    },
    validationSchema: validation,
    onSubmit: handleSubmit,
  });

 

  return (
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
              Update Partner
            </Typography>
            <p style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
              <b>X</b>
            </p>
          </div>
      
            <div className="m-4">
           
            <Grid container >
              <Grid item xs={6}>
                <Dropzone />
              </Grid>
              <Grid item xs={6} rowSpacing={3} >
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
                  helperText={formik.touched.username && formik.errors.username}
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
                  helperText={formik.touched.password && formik.errors.password}
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
                onClick={formik.handleSubmit}
              >
                Save
              </Button>
            </Grid>
          </div>
      
        </Box>
      </Modal>
      <DataGrid
        headerHeight={40}
        rowHeight={40}
        rows={Row}
        getRowId={(row)=>row.sno}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        disableSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        
  );
}
