import {
  Box, Button, Checkbox,
  FormControlLabel, Grid,
  TextField, Typography
} from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import DataTable from "./DataTable";
import Header from "./Header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
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

const MerchantPanel = () => {
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
    merchant_name: yup
      .string("Enter Merchant name")
      .required("Username is required!"),
    address: yup.string("Enter the address").required("Address is required"),
    key: yup.number("Enter Key value").required("Key is required"),
    mobile: yup
      .number("Enter the mobile number")
      .required("Mobile Number is required")
      .min(10),
    valid: yup.string("Enter the validity").required("Validity is required"),
  });

  const formik = useFormik({
    initialValues: {
      merchant_name: "",
      address: "",
      key: "",
      username: "",
      password: "",
      email: "",
      mobile: "",
      valid: "",
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
              Merchant Creation
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "22px",
                lineHeight: "1rem",
                paddingBlock: "10px",
              }}
              onClick={handleOpen}
            >
              Add Merchant
            </Button>
          </div>
          <Modal
            keepMounted
            open={open}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            style={{ borderRadius: "10px",}}
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
                  Merchant Creation
                </Typography>
                <p style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>
                  <b>X</b>
                </p>
              </div>
              <div className="m-4">
                <div className=" d-flex">
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    item
                    marginX={"6px"}
                    xs={6}
                  >
                    <TextField
                      id="merchant_name"
                      fullWidth
                      label="Merchant Name"
                      name="merchant_name"
                      size="small"
                      className="mb-2"
                      value={formik.values.merchant_name}
                      onChange={formik?.handleChange}
                      error={
                        formik.touched.merchant_name &&
                        Boolean(formik.errors.merchant_name)
                      }
                      helperText={
                        formik.touched.merchant_name &&
                        formik.errors.merchant_name
                      }
                    />

                    <TextField
                    fullWidth
                      id="address"
                      label="Merchant Address"
                      name="address"
                      size="small"
                      className="my-2"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      error={formik.touched.address && formik.errors.address}
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                    />

                    <TextField
                    fullWidth
                      id="key"
                      label="Merchant Key"
                      className="my-2"
                      name="key"
                      size="small"
                      value={formik.values.key}
                      onChange={formik.handleChange}
                      error={formik.touched.key && formik.errors.key}
                      helperText={formik.touched.key && formik.errors.key}
                    />
                    <TextField
                    fullWidth
                      id="valid"
                      label="Validity"
                      className="my-2"
                      name="valid"
                      size="small"
                      value={formik.values.valid}
                      onChange={formik.handleChange}
                      error={formik.touched.valid && formik.errors.valid}
                      helperText={formik.touched.valid && formik.errors.valid}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    item
                    marginX={"6px"}
                    xs={6}
                  >
                    <TextField
                    fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      size="small"
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
                    fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      size="small"
                      className="my-2"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && formik.errors.email}
                      helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                    fullWidth
                      id="password"
                      label="Password"
                      className="my-2"
                      name="password"
                      type="password"
                      size="small"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && formik.errors.password}
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <TextField
                    fullWidth
                      id="mobile"
                      label="Mobile No."
                      className="my-2"
                      name="mobile"
                      type="mobile"
                      size="small"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      error={formik.touched.mobile && formik.errors.mobile}
                      helperText={formik.touched.mobile && formik.errors.mobile}
                    />
                  </Grid>
                </div>

                <Grid container marginTop={1}>
                  <Typography>Partner's List</Typography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start">
                       <FormControlLabel control={<Checkbox defaultChecked />}label="Partner 1"/>
                       <FormControlLabel control={<Checkbox defaultChecked />}label="Partner 2"/>
                       <FormControlLabel control={<Checkbox defaultChecked />}label="Partner 3"/>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginTop={"2%"}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Set Active"
                  />
                  <div>
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
                  </div>
                </Grid>
              </div>
            </Box>
          </Modal>
        </Items>

        <Data>
          <DataTable />
        </Data>
      </UserForm>
    </Box>
  );
};

export default MerchantPanel;
