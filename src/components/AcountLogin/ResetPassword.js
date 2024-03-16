import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
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
import { useState, useEffect } from "react";
import { ResetPasswordUrl } from "../../Constants/UrlConstants";

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

export default function ResetPassword() {
  const [token, setToken] = useState(null);
  // const reset_token = localStorage.getItem('forget_token');
  const [error, setError] = useState("");
  // const token = reset_token;

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    confirm_password: "",
    token: "",
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
    formData.append("password", inputs.password);
    formData.append("confirm_password", inputs.confirm_password);
    formData.append("token", JSON.stringify(token));
    console.log(inputs);

    axios
      .post(ResetPasswordUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-type": "application/json,",
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
  useEffect(() => {
    // Get the token value from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");

    // Set the token value to state
    setToken(tokenParam);
  }, []);

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
                Reset Password
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
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleOnChange}
                  value={inputs.password}
                />
                {error && (
                  <p className="error" style={{ color: "red" }}>
                    {" "}
                    {error.password}{" "}
                  </p>
                )}
                <TextField
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#059473",
                      },
                    },
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm New Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="current-password"
                  onChange={handleOnChange}
                  value={inputs.confirm_password}
                />
                {error && (
                  <p className="error" style={{ color: "red" }}>
                    {" "}
                    {error.confirm_password}{" "}
                  </p>
                )}
                <input
                  name="token"
                  type="hidden"
                  onChange={handleOnChange}
                  value={token}
                />

                <Button
                  className="my-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#ff5e14" }}
                >
                  Submitting
                </Button>

                {/* {token} */}
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
