

import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

function Order() {
    const orderStatus = [
        {lable:"On The Way", value:"on_the_way"},
        {lable:"Delivered", value:"delivered"},
        {lable:"Cancelled", value:"cancelled"},
        {lable:"Returend", value:"returend"},


    ];
  return (
    <div className='px-5 lg:px-20 py-5'>
      <Grid container sx={{justifyContent:"space-between"}}>
          <Grid item xs={12} md={2.5} >
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5' >
               <h1 className='font-bold text-lg'>Filter</h1>
              
               <div className='space-y-4 mt-6'>
                  <hr />

                 <h1 className='font-semibold'>Order Status</h1>

                 {orderStatus.map((option)=>(
                    <div className='flex gap-2 items-center '>
                    <input id={option.value} type="checkbox" defaultValue={option.value}className='h-4 w-4 border-gray-300 text-indigo-600 focus:bg-green-400'   />
                    
                    <label  htmlFor={option.value}  className='cursor-pointer text-sm text-gray-600'>{option.lable}</label>
                  </div>
                 ))}
                 
               </div>
            </div>
          </Grid>   

          <Grid item xs={12} md={9} >
             {[1,1,1,11,1].map((item)=>(<OrderCard/>))}
          </Grid>

      </Grid>
    </div>
  )
}

export default Order


