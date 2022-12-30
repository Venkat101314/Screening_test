import {
  Alert,
  Card,
  CardActionArea,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Col, Container, Form, Row } from "react-bootstrap";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import useAuth from "./Auth/useAuth"

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [error, setErr] = useState("")
  const [loading, setLoading]=useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    // e.preventDefault();
    axios
      .post("http://192.168.0.132:8001/panelapi/login", {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((res) => {
        setLoading(false)
        const token = res.data.token;
        const admin = res.data.role;
        console.log(admin)
        if (res.data.status == 1) {
          if (admin === 'superadmin') {
            navigate("/admin");
            localStorage.setItem("Bearer", token);
            localStorage.setItem('Admin',admin);
          } else {
            navigate("/home");
            localStorage.setItem("Bearer", token);
            localStorage.setItem('Admin',admin);
          }
        }
        // setAuth(formik.values.email,formik.values.password,admin, token)
      })
      .catch((err) => {
        setErr(err.response.data.response);
        setLoading(false)
        console.log(err.response.data.response);
      });
  };

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
        <div className="register">
      
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              rowSpacing={2}
              marginBottom={2}
              bgcolor={'transparent'}
              width={400}
              paddingBottom={4}
              marginX={'auto'}
              boxShadow={'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);'}
            >
              <Grid item xs={12}>
                <Typography variant="h4" textAlign={"center"}>
                  Login
                </Typography>
              
              </Grid>
              <Typography  textAlign={"center"} color={'red'}>
                  {error}
                </Typography>
              <Grid item>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  size="small"
                  label="Email"
                  placeholder="Email Address"
                  value={formik?.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  size="small"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  sx={{ width: 200 }}
                  size="sm"
                  variant="contained"
                  onClick={formik.handleSubmit}
                >
                  LOGIN
                </Button>
              </Grid>
   </Grid>
    </div>
  );
};

export default Login;
