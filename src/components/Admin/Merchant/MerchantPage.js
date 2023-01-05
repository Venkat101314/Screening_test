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
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
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

const MerchantPanel = () => {
  const token = localStorage.getItem("Bearer");
  const classes = useStyle();
  const [data, setData] = useState([]); //UserData
  const [open, setOpen] = useState(false); //Dialog Box
  const [status, setStatus] = useState(true); //Image value
  const [merchantId, setMerchantId] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [partnerData, setPartnerData] = useState([]);
  const [partnerId, setPartnerId] = useState([]);
  const [getId, setGetId] = useState([]);

  const getPartnerData = () => {
    axios
      .get("http://192.168.0.132:8001/panelapi/partner", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPartnerData(res.data.response);
      })
      .catch((err) => console.log(err));
  };
  const getMerchantData = () => {
    axios
      .get("http://192.168.0.132:8001/panelapi/merchant", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    getMerchantData();
  }, []);

  React.useEffect(() => {
    getPartnerData();
  }, []);

  const onCreateMerchant = (e) => {
    formik.resetForm();
    const formData = new FormData();
    formData.append("user_name", formik.values.merchant_name);
    formData.append("password", formik.values.password);
    formData.append("email", formik.values.email);
    formData.append("mobile", formik.values.mobile);
    formData.append("merchant_key", formik.values.merchantkey);
    formData.append("valid_upto", formik.values.valid);

    formData.append("is_active", formik.values.is_active);
    console.log(formData);
    axios
      .post("http://192.168.0.132:8001/panelapi/merchant", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        getMerchantData();
        setOpen(false);
        alert("Uploaded Successfully");
        formik.resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const partnerListCheck = (e) => {
  
    const partnerValue = e.target.value;
    e.target.checked
      ? setGetId((prev) => [...prev, parseInt(partnerValue)])
      : console.log("failed");
    console.log(parseInt(partnerValue));
      setPartnerId(partnerId[e.target.checked] ? false : true);
  };

  const updateMerchant = (e) => {
    console.log(getId);
    const merchantData =   {
      'user_name': formik.values.merchant_name,
      'password': formik.values.password,
      'email': formik.values.email,
      'merchant_key': formik.values.merchantkey,
      'mobile': formik.values.mobile,
      'address': formik.values.address,
      'valid_upto': formik.values.valid,
      'is_active': formik.values.is_active,
      'partners': getId,
    }

    axios
      .put(
        `http://192.168.0.132:8001/panelapi/merchant/${merchantId}`,
      merchantData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        getMerchantData();
        setOpen(false);
        alert("Updated Successfully");
        setGetId([]);
        formik.resetForm();
      })
      .catch((error) => {
        console.log(error);
        setGetId([]);
      });
  };

  const deleteMerchant = (e) => {
    axios
      .delete(`http://192.168.0.132:8001/panelapi/merchant/${merchantId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getMerchantData();
        alert("Deleted Successfully");
      })
      .catch((err) => console.log(err));
    setConfirm(false);
  };

  const handleMerchant = (e) => {
    setStatus(false);
    setMerchantId(e.row.id);
    console.log(e.row);
    formik.setFieldValue("merchant_name", e.row.merchant_name);
    formik.setFieldValue("email", e.row.email);
    formik.setFieldValue("mobile", e.row.mobile);
    formik.setFieldValue("address", e.row.address);
    formik.setFieldValue("merchantkey", e.row.merchantkey);
    formik.setFieldValue("valid", e.row.valid);
    formik.setFieldValue(
      "is_active",
      e.row.is_active === "Active" ? true : false
    );
    const mydata = JSON.parse(e.row.partner_id);
    const checkPartnerId = (merchant, partnerDetails) => {
      const result = partnerDetails.map((el) => {
        return merchant.includes(el);
      });
      setPartnerId(result);
      return result;
    };

    checkPartnerId(mydata, PartnerDetails);
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
    merchant_name: yup
      .string("Enter a Merchant name")
      .required("Merchant Name is required!"),
    address: yup.string("Enter the address").required("Address is required!"),
    key: yup.string("Enter key").required("Key is required!"),
    mobile: yup
      .string("Enter mobile number")
      .required("Mobile no. is required!"),
    valid: yup
      .string("Enter a validity days")
      .required("Validity is required!"),
  });

  const columns = [
    {
      field: "sno",
      headerName: "S.no",
      editable: false,
      flex: 0.3,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      sortable: false,
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "merchant_name",
      headerName: "Merchant Name",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "left",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
    },

    {
      field: "mobile",
      headerName: "Mobile",
      flex: 0.6,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
    },

    {
      field: "valid",
      headerName: "Validity",
      flex: 1,
      editable: false,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      sortable: false,
    },
    {
      field: "is_active",
      headerName: "Active Status",
      flex: 0.7,
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
            <Grid item xs={6}>
              <Button
                onClick={() => {
                  setOpen(true);
                  handleMerchant(params);
                }}
              >
                <Edit sx={{ color: "#1976d2" }} />
              </Button>
              <Button
                onClick={() => {
                  setConfirm(true);
                  handleMerchant(params);
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
                  <Button onClick={deleteMerchant} autoFocus>
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

  const PartnerDetails = partnerData.map((i) => i.id);

  const Row = data?.map((item, idx) => ({
    id: item.id,
    sno: ++idx,
    merchant_name: item?.user_name,
    email: item?.email,
    mobile: item?.mobile,
    address: item?.address,
    merchantkey: item?.merchant_key,
    valid: item?.valid_upto,
    is_active: item.is_active ? "Active" : "Deactive",
    partner_id: item.partner_id,
  }));

  const formik = useFormik({
    initialValues: {
      merchant_name: "",
      address: "",
      merchantkey: "",
      password: "",
      email: "",
      mobile: "",
      valid: "",
      is_active: false,
      partner_status: [],
    },
    validationSchema: validation,
    onSubmit: onCreateMerchant,
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
            <Typography className={classes.merchantTitle}>
              Merchant Creation
            </Typography>
            <Button
              className={classes.addButton}
              variant="contained"
              onClick={() => {
                setOpen(true);
                setStatus(true);
                setPartnerId([false]);
                formik.resetForm();
              }}
            >
              Add Merchant
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
                {status === true ? "Merchant Creation" : "Update Merchant"}
              </Typography>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogBoxContent} dividers>
              <Grid container>
                <Grid item xs={6} paddingX={1}>
                  <TextField
                    id="merchant_name"
                    fullWidth
                    label="Merchant Name"
                    name="merchant_name"
                    size="small"
                    className="my-2"
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
                    className="my-3"
                    name="mobile"
                    type="mobile"
                    size="small"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && formik.errors.mobile}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                  />
                  <TextField
                    fullWidth
                    id="merchantkey"
                    label="Merchant Key"
                    className="my-3"
                    name="merchantkey"
                    size="small"
                    value={formik.values.merchantkey}
                    onChange={formik.handleChange}
                    error={formik.touched.key && formik.errors.key}
                    helperText={formik.touched.key && formik.errors.key}
                  />
                  <TextField
                    fullWidth
                    id="valid"
                    label="Validity"
                    className="my-3"
                    name="valid"
                    size="small"
                    placeholder="dd/mm/yyyy"
                    value={formik.values.valid}
                    onChange={formik.handleChange}
                    error={formik.touched.valid && formik.errors.valid}
                    helperText={formik.touched.valid && formik.errors.valid}
                  />
                </Grid>
                <Grid item xs={6} paddingX={1}>
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
                    id="address"
                    label="Merchant Address"
                    name="address"
                    multiline
                    rows={4}
                    className="my-2"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && formik.errors.address}
                    helperText={formik.touched.address && formik.errors.address}
                  />

                  <Typography>Partner's List :</Typography>

                  <Grid container spacing={2} id="partnerInfo">
                    {partnerData.map((val, idx) => {
                      return (
                        <Grid item xs={4}>
                          <input
                            type="checkbox"
                            id={val.id}
                            name={val.name}
                            checked={partnerId[idx]}
                            onChange={partnerListCheck}
                            value={val.id}
                          />
                          <label for={idx}>{val.name}</label>
                          <br></br>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions
              sx={{ justifyContent: "space-between", marginInline: 2 }}
            >
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="is_active"
                      name="is_active"
                      checked={formik.values.is_active}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Active"
                />
              </Grid>
              <Grid item xs={6} justifyContent={"space-between"}>
                <Button
                  variant="contained"
                  sx={{ marginInline: 2 }}
                  className={classes.addButton}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={status ? formik.handleSubmit : updateMerchant}
                  variant="contained"
                  className={classes.addButton}
                >
                  {status ? "Save" : "Update"}
                </Button>
              </Grid>
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

export default MerchantPanel;
