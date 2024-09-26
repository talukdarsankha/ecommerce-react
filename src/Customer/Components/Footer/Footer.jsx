

import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div className='mt-10'>
       <Grid container spacing={2} 
        className='bg-black text-white text-center mt-10 w-full' sx={{py:3}}>
           
           <Grid item xs={6} sm={6} md={3} >
              <Typography className='pb-5' variant='h6'>Company</Typography>
               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>About Us</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Blog</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Career</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Clients</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Updates</Button>
               </div>
           </Grid>

           <Grid item xs={6} sm={6} md={3} >
              <Typography className='pb-5' variant='h6'>Solutions</Typography>
               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Order Status</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Location</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Our Branch</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Support</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Analytics</Button>
               </div>
           </Grid>

           <Grid item xs={6} sm={6} md={3} >
              <Typography className='pb-5' variant='h6'>Help</Typography>
               <div>
                 <Button gutterBotton className='pb-5' variant='h6'></Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>API Stauts</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Join Us</Button>
               </div>

               
           </Grid>

           <Grid item xs={6} sm={6} md={3} >
              <Typography className='pb-5' variant='h6'>Legel</Typography>
               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Company Regulation</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Privacy</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Call</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>License</Button>
               </div>

               <div>
                 <Button gutterBotton className='pb-5' variant='h6'>Certifications</Button>
               </div>
           </Grid>

           <Grid className='pt-20' item xs={12}>
              <Typography variant='body2' component="p" align='center'>
                &copy; 2024 ecommerce store. All Right Reserved.
              </Typography>

              <Typography variant='body2' component="p">
                 Made With Love By Me.
              </Typography>
           </Grid>

      </Grid>

     

    </div>
  )
}

export default Footer


