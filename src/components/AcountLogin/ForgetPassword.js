import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../AcountLogin/login.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ForgotPasswordUrl } from "../../Constants/UrlConstants";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Sky Commodity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ForgetPassword() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
  });
  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("email", inputs.email);
    console.log(formData);
    axios
      .post(ForgotPasswordUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.errors);
      });
  };

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Sign In </title>
      </Helmet>

      <ThemeProvider theme={theme}>
        <section id="bgcolor">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#059473" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Forgot Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#059473",
                      },
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Mobile Number/Email"
                  type="text"
                  id="text"
                  autoComplete="current-password"
                  onChange={handleOnChange}
                  value={inputs.email}
                />
                {error && (
                  <p className="error" style={{ color: "red" }}>
                    {" "}
                    {error.email}{" "}
                  </p>
                )}
                <Button
                  className="my-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#ff5e14" }}
                >
                  Submit
                </Button>
                <Grid container></Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </section>
      </ThemeProvider>
    </>
  );
}
