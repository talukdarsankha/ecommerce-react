

import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

function OrderTracker({activeStep}) {

    const steps = [
        "Order Confirmed",
        "Shipped",
        "Out for delivery",
        "Placed Order",
        "Delivered"
        
    ]

  return (
    <div className='w-full'>
       <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((item)=><Step>
             <StepLabel sx={{color:"#1cde24", fontSize:"44px"}}>{item}</StepLabel>
          </Step>)}
       </Stepper>
    </div>
  )
}

export default OrderTracker
