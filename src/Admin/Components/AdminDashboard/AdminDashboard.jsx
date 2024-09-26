import { Grid } from '@mui/material'
import React from 'react'
import Achievment from './Achievment'
import MonthlyOverview from './MonthlyOverview'
import ProductTable from '../ProductTable'
import OrderTable from '../OrderTable'

function AdminDashboard() {
  return (
    <div>
      <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
              <Achievment/>
          </Grid>

          <Grid item xs={12} md={8}>
              <MonthlyOverview/>
          </Grid>

          <Grid item xs={12} >
              <ProductTable/>
          </Grid>

          <Grid item xs={12} >
              <OrderTable/>
          </Grid>
      </Grid>
      
    </div>
  )
}

export default AdminDashboard
