import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import { SignInUrl } from "../../Constants/UrlConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Sky Commodity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#059473",
          },
        },
      },
    },
  },
});

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [usernotexit, setusernotexit] = useState("");

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);

    try {
      const response = await axios.post(
        "https://skycommodity.in/bullsPanel/api/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        // Clear any previous error messages
        setErrorMessage("");
        setusernotexit("");

        localStorage.setItem("login", true);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("sign-id", response.data.data.id);
        localStorage.setItem("name", response.data.data.firstName);
        localStorage.setItem("Email", response.data.data.email);
        localStorage.setItem("Status", response.data.status);

        toast("Successfully Logged in!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          // navigate('/auth-one');
        }, 2000);

        // setInterval(() => {
        //   console.log("logged in");
        // }, 1000);
      }
    } catch (error) {
      console.log(error, "_____error");
      if (error.response.status === 401) {
        setErrorMessage("");
        setusernotexit("Email and Password are invalid");
      } else {
        setusernotexit("");
        setErrorMessage(error.response.data.errors);
      }
    }
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
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                Validate
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
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={inputs.email}
                  onChange={handleOnChange}
                />
                {errorMessage && (
                  <p className="error" style={{ color: "red" }}>
                    {" "}
                    {errorMessage.email}{" "}
                  </p>
                )}

                {usernotexit && (
                  <p className="error" style={{ color: "red" }}>
                    {usernotexit}
                  </p>
                )}
                <TextField
                  margin="normal"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#059473",
                      },
                    },
                  }}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={inputs.password}
                  onChange={handleOnChange}
                />
                {errorMessage && (
                  <p className="error" style={{ color: "red" }}>
                    {" "}
                    {errorMessage.password}{" "}
                  </p>
                )}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  className="my-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#ff5e14" }}
                >
                  Sign In
                </Button>
                {localStorage.getItem("token")}
                {localStorage.getItem("name")}
                {localStorage.getItem("pass")}
                {localStorage.getItem("Email")}
                {localStorage.getItem("Status")}
                <Grid container>
                  <Grid item xs className="bottom-text">
                    <Link href="forgot-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item className="bottom-text">
                    <Link href="/sign-up" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </section>
      </ThemeProvider>
    </>
  );
}
