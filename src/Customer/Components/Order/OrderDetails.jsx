

import React from 'react'
import AddressCard from '../Address/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid, Grid2 } from '@mui/material'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { deepOrange } from '@mui/material/colors';

function OrderDetails() {
  return (
    <div className='px-5 lg:px-20'>
       <div>
         <h1 className='font-bold text-lg py-7'>Delivery Address</h1>
         <AddressCard/>
       </div>

       <div className='my-10'>
         <OrderTracker activeStep={3}/>
       </div>

       <Grid container className='space-x-5'>
          <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center"}}>
            <Grid item xs={8} >
            <div className=' flex cursor-pointer gap-4 items-center'>
                <img
                className='w-[5rem] h-[5rem] object-cover object-top'
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />

                <div className='space-y-1'>
                    <p className='mb-2 font-semibold sm:text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className='opacity-50 text-sm font-semibold'><span>Color: Pink, </span> <span>Size: M</span></p>
                    <p className='opacity-50 text-sm font-semibold'>Color: White</p>
                </div>
            </div>
            </Grid>

            <Grid item xs={4} className='text-end'>
                 <Box sx={{ color: deepOrange[500] }}>
                    <StarBorderPurple500Icon sx={{fontSize:"2rem"}}/>
                    <span>Give Ratings & Review</span>
                 </Box>
            </Grid>

          </Grid>
       </Grid>

    </div>
  )
}

export default OrderDetails
