import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { toast } from "react-toastify";

import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const theme = createTheme();

export default function DocumentVerification() {
  const [aadharFrontError, setAadharFrontError] = useState("");
  const [aadharBackError, setAadharBackError] = useState("");
  const [panCardError, setPanCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    console.log(event.target.aadhar_front.files[0] , "event.target.aadhar_front.files[0]")
    formData.append("aadhar_front", event.target.aadhar_front.files[0]);
    formData.append("aadhar_back", event.target.aadhar_back.files[0]);
    formData.append("pan_card", event.target.pan_card.files[0]);

    try {
      const storedData = localStorage.getItem("tokenmobile");

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${storedData}`,
      };

      console.log(formData, "Form Data Payload")

      const response = await axios.post(
        "https://skycommodity.in/bullsPanel/api/upload-documents",
        formData,
        { headers }
      );
      const { status, message, errors } = response.data;
      console.log(response.data);
      if (status === 200) {
        toast.success(`${message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });

        window.location.href = "https://skycommodity.in/bullsPanel/login";
      } else if (status === 400 && errors) {
        if (errors.aadhar_front) {
          setAadharFrontError(errors.aadhar_front);
        } else {
          setAadharFrontError("");
        }

        if (errors.aadhar_back) {
          setAadharBackError(errors.aadhar_back);
        } else {
          setAadharBackError("");
        }

        if (errors.pan_card) {
          setPanCardError(errors.pan_card);
        } else {
          setPanCardError("");
        }
      }
    } catch (error) {
      console.error(error, "________catch");
      const docerror = error.response.data.errors;
      console.error(docerror, "________catch");

      if (docerror.aadhar_front) {
        setAadharFrontError(docerror.aadhar_front);
      } else {
        setAadharFrontError("");
      }

      if (docerror.aadhar_back) {
        setAadharBackError(docerror.aadhar_back);
      } else {
        setAadharBackError("");
      }

      if (docerror.pan_card) {
        setPanCardError(docerror.pan_card);
      } else {
        setPanCardError("");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Document Verification</title>
      </Helmet>

      <ThemeProvider theme={theme}>
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
              Document Verification
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                label="Upload Aadhar Card Front Side Photo"
                id="outlined-start-adornment"
                sx={{ mt: 5, color: "#059473" }}
                type="file"
                name="aadhar_front"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />

              {aadharFrontError &&
                aadharFrontError.length > 0 &&
                aadharFrontError.map((error, index) => (
                  <span key={index} className="text-sm ml-4 text-red-600">
                    {error}
                  </span>
                ))}

              <TextField
                fullWidth
                label="Upload Aadhar Card Front Side Photo"
                id="outlined-start-adornment"
                sx={{ mt: 4, color: "#059473" }}
                type="file"
                name="aadhar_back"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />

              {aadharBackError &&
                aadharBackError.length > 0 &&
                aadharBackError.map((error, index) => (
                  <span key={index} className="text-sm ml-4 text-red-600">
                    {error}
                  </span>
                ))}

              <TextField
                fullWidth
                label="Upload Pan Card Photo"
                id="outlined-start-adornment"
                sx={{ mt: 4, color: "#059473" }}
                type="file"
                name="pan_card"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />

              {panCardError &&
                panCardError.length > 0 &&
                panCardError.map((error, index) => (
                  <span key={index} className="text-sm ml-4 text-red-600">
                    {error}
                  </span>
                ))}

              {/* 
              <TextField
                sx={{
                  mt: 5,
                  "& .MuiInputLabel-root.Mui-focused": { color: '#059473' },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#059473"
                    }
                  }
                }}
                variant='outlined'
                margin="normal"
                fullWidth
                label="Upload Aadhar Card Front Side Photo"
                type="file"
                name="aadhar_front"
                className=''
              /> */}

              {/* <TextField
                sx={{
                  mt: 4,
                  "& .MuiInputLabel-root.Mui-focused": { color: '#059473' },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#059473"
                    }
                  }
                }}
                // variant='outlined'
                margin="normal"
                fullWidth
                label="Upload Aadhar Card Back Side Photo"
                type="file"
                autoComplete="aadhar_back"
                name="aadhar_back"
              /> */}

              {/* <TextField
                sx={{
                  mt: 4,
                  "& .MuiInputLabel-root.Mui-focused": { color: '#059473' },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#059473"
                    }
                  }
                }}
                variant='outlined'
                margin="normal"
                fullWidth
                label="Upload Pan Card Photo"
                type="file"
                name="pan_card"
              /> */}

              <Button
                className="my-button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 9, bgcolor: "#ff5e14" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
