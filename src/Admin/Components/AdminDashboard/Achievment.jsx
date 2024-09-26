

import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'


const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg =styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

function Achievment() {
  return (
    <Card sx={{position:"relative"}}>
       <CardContent>

         <Typography variant='h6' sx={{letterSpacing:".25px"}}>
             Your Ecommerce Store
         </Typography>
         <Typography variant='body2'> Congratulations | 🥳</Typography>
         <Typography variant='h5' sx={{my:2.1}}> 420.21k | 🎉</Typography>

         <Button variant='contained' size='small' sx={{marginY:"5px"}}>View Sales</Button>

         <TriangleImg src='' ></TriangleImg>
         <TrophyImg src='https://cdn.pixabay.com/photo/2019/04/21/23/15/trophy-4145177_1280.png' />
       </CardContent>
    </Card>
  )
}

export default Achievment
