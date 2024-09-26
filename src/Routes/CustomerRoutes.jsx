

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage'
import Cart from '../Customer/Components/Cart/Cart'
import Navigation from '../Customer/Components/Nanigation'
import Footer from '../Customer/Components/Footer/Footer'
import Product from '../Customer/Components/Product/Product'
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails'
import CheckOut from '../Customer/Components/Cart/CheckOut'
import Order from '../Customer/Components/Order/Order'
import OrderDetails from '../Customer/Components/Order/OrderDetails'
import PaymentSuccess from '../Customer/Components/Payment/PaymentSuccess'

function CustomerRoutes() {
  return (
    <div>

        <div>
            <Navigation/>
        </div>
      <Routes>
        <Route path='/login' element={<HomePage/>} />
        <Route path='/register' element={<HomePage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:topLavel/:seconLavel/:thirdLavel' element={<Product/>} />
        <Route path='/Product/:productId' element={<ProductDetails/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/account/orders' element={<Order/>} />
        <Route path='/account/order/:orderId' element={<OrderDetails/>} />
        <Route path='/payment/:orderId' element={<PaymentSuccess/>} />
        
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
