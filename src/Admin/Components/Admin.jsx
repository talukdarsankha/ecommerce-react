

import { UsersIcon } from '@heroicons/react/24/outline';
import { AccountCircle, AccountCircleOutlined, AddShoppingCartRounded, Dashboard, Group, MoneyOffCsredRounded, ProductionQuantityLimits } from '@mui/icons-material';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import CreateProductForm from './CreateProductForm';
import ProductTable from './ProductTable';
import OrderTable from './OrderTable';
import CustomerTable from './CustomerTable';

const menu = [
    {name:"Dashboard",path:"/admin",icon:<Dashboard/>},
    {name:"Products",path:"/admin/products",icon:<ProductionQuantityLimits/>},
    {name:"Customers",path:"/admin/customers",icon:<Group/>},
    {name:"Orders",path:"/admin/orders",icon:<MoneyOffCsredRounded/>},
    {name:"AddProducts",path:"/admin/products/create",icon:<AddShoppingCartRounded/>},


]

function Admin() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}>

            {/* {isLargeScreen && <Toolbar/>} */}

            <List>
                {menu.map((item)=><ListItem key={item.name}
                 disablePadding
                 onClick={()=>navigate(item.path)}
                 >
                    <ListItemButton>
                        <ListItemIcon>
                             {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItemButton>

                </ListItem>)}
            </List>


            <List sx={{borderTop:"1px solid gray"}}>
                <ListItem disablePadding
                //  onClick={()=>navigate(item.path)}
                 >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircle/>
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
            </List>

        </Box>
    )


  return (
    <div>
       <div className='flex relative'>
        <CssBaseline/>
          <div className='w-[15%] shadow-gray-500 shadow-md  h-screen sticky top-0 left-0'>
            {drawer}
          </div>


           <div className='w-[85%] p-6'>
              <Routes>
               <Route path="/" element={<AdminDashboard/>} />
               <Route path="/products/create" element={<CreateProductForm/>} />
               <Route path="/products" element={<ProductTable/>} />
               <Route path="/orders" element={<OrderTable/>} />
               <Route path="/customers" element={<CustomerTable/>} />
              </Routes>
           </div>


       </div>
    </div>
  )
}

export default Admin


