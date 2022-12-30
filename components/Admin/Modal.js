import {
    Box, Button, Grid, TextField
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useFormik } from "formik";
import * as React from "react";
import * as yup from "yup";
import Dropzone from "./Dropzone"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:"12px"
};

const useStyles = styled((theme)=>(
    {
button:{
    "&.MuiButtonBase-root.MuiButton-root":{
     paddingBlock:"0px"
    }
}
    }
))

export default function KeepMountedModal() {
  const token = localStorage.getItem("Bearer");

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("logo", image);
    formData.append("name", formik.values.username);
    formData.append("password", formik.values.password);
    formData.append("email", formik.values.email);
    formData.append("is_active", "true");

    axios
      .post("http://192.168.0.132:8001/panelapi/partner", formData, {
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
  const handleFileSelect = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validation,
    onSubmit: handleSubmit,
  });

  const header = {
    headers: {
      Authorization: `Bearer + ${token}`,
    },
  };
  const [image, setImage] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    
    <div>
      <div
        className="d-flex justify-content-between"
        style={{ alignItems: "center" }}
      >
        <Typography fontSize={"16px"} fontFamily={"Fira Sans"} >Partner Creation</Typography>
        <Button variant="contained" sx={{borderRadius:"22px", lineHeight:"1rem",paddingBlock:"10px"}}onClick={handleOpen}>
          Add Partner
        </Button>
      </div>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        style={{  borderRadius:"10px"}}
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
              borderTopLeftRadius:"12px",
              borderTopRightRadius:"12px"
            }}
          >
            <Typography variant={"h7"} fontFamily={"Fira Sans"}>Partner Creation</Typography>
           <p style={{cursor:'pointer'}} onClick={()=>setOpen(false)}><b>X</b></p>
          </div>
          <div className="m-4">
            <Grid container>
              <Grid item xs={6}>
                <Dropzone/>
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
                classes={classes.button}
                className="mx-2"
                onClick={() => setOpen(false)}
                sx={{ borderRadius: "22px", paddingBlock:"10px", lineHeight:"1rem",  }}
              >
                Cancel
              </Button>
              <Button
               classes={classes.button}
                variant="contained"
                className="mx-2"
                sx={{ borderRadius: "22px", paddingBlock:"10px", lineHeight:"1rem" }}
                onClick={formik.handleSubmit}
              >
                Save
              </Button>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
