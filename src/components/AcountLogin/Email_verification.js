import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../AcountLogin/login.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import axios from "axios";
import { AppContext } from "../../Context/Context";
import { useContext } from "react";

const theme = createTheme();

export default function Mobile_verification() {
  const { steper, setsteper } = useContext(AppContext);

  const [mobileNumber, setMobileNumber] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(true);
  const [otperror, setotperror] = useState("");
  const [errorsmg, seterrormsg] = useState("");
  const [token, setToken] = useState(null);

  const handleChangeMobile = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleChangeOtp = (newValue) => {
    setOtp(newValue);
  };

  const handleSendOtp = async () => {
    const payload = {
      email: mobileNumber,
    };

    try {
      // const storedData = localStorage.getItem('tokenmobile');
      // const headers = {
      //   Authorization: `Bearer ${storedData}`,
      // };

      const response = await axios.post(
        "https://skycommodity.in/bullsPanel/api/email-register",
        payload
      );
      let { status } = response.data;
      let { access_token } = response.data.user_details;
      console.log("token____", token);
      localStorage.setItem("tokenmobile", access_token);
      // console.log(response.data, "_________--response");

      localStorage.setItem("tokenmobile", access_token);

      if (access_token) {
        setToken(access_token);
        setOtpSent(false);
        seterrormsg("");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      seterrormsg(
        error.response?.data?.errors?.email[0] ||
          "An error occurred while sending OTP."
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (token) {
      const payload = {
        email_otp: otp,
      };

      try {
        const storedData = localStorage.getItem("tokenmobile");
        console.log(storedData, "---storedData");

        const headers = {
          Authorization: `Bearer ${storedData}`,
        };

        const response = await axios.post(
          "https://skycommodity.in/bullsPanel/api/verfiy-email-otp",
          payload,
          { headers }
        );
        console.log(response.data, "_________--response---jdkd");
        const {
          status,
          user_details: { token },
        } = response.data;

        if (status === 200) {
          setsteper(2);
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setotperror(
          error.response?.data?.errors?.email_otp[0] ||
            "An error occurred while verifying OTP."
        );
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Sign In</title>
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
                Email Verification
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {otpSent ? (
                  <>
                    <TextField
                      sx={{
                        mt: 5,
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#059473",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            borderColor: "#059473",
                          },
                        },
                      }}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="Email"
                      label="Enter Email Address"
                      type="email"
                      id="Email"
                      autoComplete="email"
                      value={mobileNumber}
                      onChange={handleChangeMobile}
                    />
                    {errorsmg && <p className="text-red-600">{errorsmg}</p>}
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{ mt: 1, mb: 5 }}
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography component="h1" variant="h6">
                      Enter OTP
                    </Typography>
                    <MuiOtpInput
                      length={6}
                      mt={2}
                      value={otp}
                      sx={{
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#059473",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            borderColor: "#059473",
                          },
                        },
                      }}
                      onChange={handleChangeOtp}
                    />
                    {otperror && <p className="text-red-600">{otperror}</p>}
                    <Button
                      className="my-button"
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 9, bgcolor: "#ff5e14" }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                    <Grid container></Grid>
                  </>
                )}
              </Box>
            </Box>
          </Container>
        </section>
      </ThemeProvider>
    </>
  );
}
