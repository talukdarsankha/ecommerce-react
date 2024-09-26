import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { AccountBoxOutlined, Money, MoreVert, ProductionQuantityLimitsTwoTone, SupervisedUserCircleSharp, TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

function MonthlyOverview() {

    const salesData = [
        {
            stats:'985k',
            title:"Sales",
            color:"orange",
            icon:<TrendingUp sx={{fontSize:"1.50rem"}} />
    
        },
        {
            stats:'15.2k',
            title:"Customers",
            color:"blue",
            icon:<SupervisedUserCircleSharp sx={{fontSize:"1.50rem"}} />
    
        },
        {
            stats:'56k',
            title:"Products",
            color:"gray",
            icon:<ProductionQuantityLimitsTwoTone sx={{fontSize:"1.50rem"}} />
    
        },
        {
            stats:'56k',
            title:"Revenue",
            color:"green",
            icon:<CurrencyDollarIcon sx={{fontSize:"1.50rem"}} />
    
        },
    ]

    const renderStats=()=>{
        return salesData.map((item, index)=>(
            <Grid item xs={12} sm={3} key={index} >
               <Box sx={{
                  display:'flex', alignItems:"center"
                 }}>
                 <Avatar 
                  variant='rounded'
                  sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    background:`${item.color}`
                  }}
                  >
                    {item.icon}
                  </Avatar>

                  <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                  </Box>
               </Box>
            </Grid>
        ))
    }

  return (
    <Card>
        <CardHeader
         title="Monthly Overview"
         action={
            <IconButton  size="small">
                  <MoreVert/>
            </IconButton>
         }
         subheader={
            <Typography variant='body2'>
              <Box component={"span"}
               sx={{
                fontWeight:600
               }}
               >
              Total 67.32% growth
              </Box> this month
            </Typography>
         }

         titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2rem !important',
                letterSpacing:'.15px !important'
            }
         }}

        />

        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
               {renderStats()}
            </Grid>
        </CardContent>
    </Card>
  )
}

export default MonthlyOverview
