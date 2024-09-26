
import { AdjustSharp } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderCard() {
  
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${1}`)}  className='shadow-lg hover:shadow-2xl rounded-md p-5 my-5 border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={7}>

            <div className=' flex cursor-pointer gap-4 items-center'>
                <img
                className='w-[5rem] h-[5rem] object-cover object-top'
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />

                <div className='space-y-1'>
                    <p className='mb-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className='opacity-50 text-sm font-semibold'>Size: M</p>
                    <p className='opacity-50 text-sm font-semibold'>Color: White</p>
                </div>
            </div>

        </Grid>

        <Grid item xs={2}>
           <p>₹2,199</p>
        </Grid>

        <Grid item xs={3}>
           {true && <div>
            <p>
            <AdjustSharp sx={{width:"15px", height:"15px"}} 
            className='text-blue-600 mr-2 '/>
            <span>Delivered on March 09</span>
           </p>

           <p className='text-xs mt-1'>
            Your Item has been delivered
           </p>
             </div>}
           {false && <p>
            <AdjustSharp/>
            <span>Delivered on March 09</span>
           </p>}
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard

