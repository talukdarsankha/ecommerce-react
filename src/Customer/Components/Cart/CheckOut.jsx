// import React from 'react'

// function CheckOut() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default CheckOut

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummery from "./OrderSummery";

const steps = [
  "Create Account",
  "Address",
  "Order Summary",
  "Payment"
];

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const location = useLocation();

  const locationParam = new URLSearchParams(location.search);
  const currentStep = locationParam.get("step");

  return (
    <div className="px-10 lg:px-20 py-10">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

       
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            
           

            <div className="mt-10 pt-10">
                {currentStep==1? <DeliveryAddressForm/> : <OrderSummery/>}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
