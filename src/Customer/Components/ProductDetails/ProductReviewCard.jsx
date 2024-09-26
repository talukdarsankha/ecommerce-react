

import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3} >
         <Grid item xs={1}>
           <Box>
             <Avatar sx={{width:46, height:46, bgcolor:"#9155fd"}}>
                 R
             </Avatar>
           </Box>
         </Grid>
         <Grid item xs={9}>
           <div className='space-y-2'>
              <div className='flex items-center justify-start space-x-3 ml-3'>
                <p className='font-semibold'>Rajs</p>
                <p className='opacity-60'>Aug 12, 2024</p>
              </div>

              <Rating value={4.5}  precision={.5} readOnly></Rating>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem omnis repellat voluptate reiciendis. Nobis ea saepe quas odit praesentium eveniet!</p>
           </div>
         </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard


