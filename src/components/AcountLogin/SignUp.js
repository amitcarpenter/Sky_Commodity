import React, { useState } from "react";
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
import { Helmet } from "react-helmet";

import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/Context";
import { useContext } from "react";
import lastDayOfDecade from "date-fns/lastDayOfDecade";

export default function SignUp() {
  const { steper, setsteper } = useContext(AppContext);
  const [inputuser, setInputUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    walletPin: "",
    mobile: "",
  });

  const [efirst_name, setEFirstName] = useState("");
  const [elast_name, setELastName] = useState("");
  const [epassword, setEPassword] = useState("");
  const [econfirm_password, setEConfirmPassword] = useState("");
  const [ewalletPin, setEWalletPin] = useState("");
  const [emobile, setEmobile] = useState("");

  const [image1, setEFirstImage] = useState("");

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

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  function handleImageChange(event) {
    setEFirstImage(event.target.files[0]);
  }

  const payload = {
    first_name: inputuser.first_name,
    last_name: inputuser.last_name,
    password: inputuser.password,
    confirm_password: inputuser.confirm_password,
    mobile: inputuser.mobile,
    // profile_picture: image1,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const storedData = localStorage.getItem("tokenmobile");

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${storedData}`,
      };

      const response = await axios.post(
        "https://skycommodity.in/bullsPanel/api/create-profile",
        payload,
        { headers }
      );
      // console.log(response.data, "_________--response");
      const { status, message } = response.data;

      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });

      if (status === 200) {
        return setsteper(3);
      }
    } catch (errors) {
      console.log("error ", errors);

      const { confirm_password, first_name, last_name, password, mobile } =
        errors.response.data.errors;

      setEFirstName(first_name ? first_name[0] : "");
      setELastName(last_name ? last_name[0] : "");
      setEPassword(password ? password[0] : "");
      setEConfirmPassword(confirm_password ? confirm_password[0] : "");
      setEmobile(mobile ? mobile[0] : "");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#059473" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Details
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
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
                    autoComplete="given-name"
                    name="first_name"
                    fullWidth
                    type="text"
                    label="First Name"
                    autoFocus
                    inputProps={{ maxLength: 10 }}
                    onChange={handleOnChange}
                    value={inputuser.first_name}
                  />
                  {efirst_name && (
                    <span className="ml-4 text-sm text-red-600">
                      {efirst_name}
                    </span>
                  )}
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473",
                        },
                      },
                    }}
                    fullWidth
                    variant="outlined"
                    label="Last Name"
                    name="last_name"
                    autoComplete="family-name"
                    type="text"
                    inputProps={{ maxLength: 10 }}
                    onChange={handleOnChange}
                    value={inputuser.last_name}
                  />
                  {elast_name && (
                    <span className="ml-4 text-sm text-red-600">
                      {elast_name}
                    </span>
                  )}
                </Grid>
                {/* Password */}
                <Grid item xs={12}>
                  <TextField
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
                    variant="outlined"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    value={inputuser.password}
                  />
                  {epassword && (
                    <span className="ml-4 text-sm text-red-600">
                      {epassword}
                    </span>
                  )}
                </Grid>
                {/* Confirm Password */}
                <Grid item xs={12}>
                  <TextField
                    sx={{
                      "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473",
                        },
                      },
                    }}
                    fullWidth
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    value={inputuser.confirm_password}
                  />
                  {econfirm_password && (
                    <span className="ml-4 text-sm text-red-600">
                      {econfirm_password}
                    </span>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    sx={{
                      "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473",
                        },
                      },
                    }}
                    fullWidth
                    name="mobile"
                    label="mobile "
                    type="number"
                    autoComplete="mobile"
                    variant="outlined"
                    onChange={handleOnChange}
                    value={inputuser.mobile}
                  />
                  {emobile && (
                    <span className="ml-4 text-sm text-red-600">{emobile}</span>
                  )}
                </Grid>

                {/* Profile Picture */}
                {/* <Grid item xs={12}>
                  <TextField
                    sx={{
                      mt: 4,
                      "& .MuiInputLabel-root.Mui-focused": { color: "#059473" },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473",
                        },
                      },
                    }}
                    variant="outlined"
                    fullWidth
                    name="profile_image"
                    type="file"
                    autoComplete="pan"
                    onChange={handleImageChange}
                  />
                </Grid> */}
              </Grid>
              <Button
                className="my-button"
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#ff5e14" }}
                value="button"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item className="bottom-text">
                  <Link href="/document-verification" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
