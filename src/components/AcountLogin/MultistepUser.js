import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Mobile_verification from "./Mobile_verification";
import Email_varification from "./Email_verification";
import SignUp from "./SignUp";
import Document_verification from "./Document_verification";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import { Helmet } from "react-helmet";
const steps = ["Email Verification", "Create Profle", "Document verification"];

const MultistepUser = () => {
  const { steper, setsteper } = useContext(AppContext);

  const stepForm = (step) => {
    switch (step) {
      case 1:
        return <Email_varification />;

      case 2:
        return <SignUp />;
      case 3:
        return <Document_verification />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Sky Commodity | SignUp </title>
      </Helmet>

      <section className="py-[60px]">
        <div className="container">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={steper - 1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {stepForm(steper)}
        </div>
      </section>
    </>
  );
};

export default MultistepUser;
