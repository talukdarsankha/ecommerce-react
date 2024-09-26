import React, { useEffect } from 'react'
import AddressCard from '../Address/AddressCard'
import { Backdrop, Button, CircularProgress, Divider } from '@mui/material'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../Redux/Order/Action'
import { createPayment } from '../../../Redux/Payment/Action'

function OrderSummery() {

  const dispatch = useDispatch();
  const location = useLocation();
  const reqParam = new URLSearchParams(location.search);
  const orderId = reqParam.get("order_id");
  const {order} = useSelector(store=>store);
  const {payment}  = useSelector(store=>store);

  useEffect(()=>{
    if(orderId){
      dispatch(getOrderById(orderId))
    }
  },[orderId])

   const handlePay=()=>{
      dispatch(createPayment(orderId))
   }

  return (
    <div>

       {payment.loading && <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>}

      <div className='p-5 shadow-lg rounded-s-md border'> 
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className='lg:grid grid-cols-3 py-5 relative'>
         <div className='col-span-2 space-y-2 '>
         {order.order?.orderItems?.length>0 && order.order?.orderItems?.map((item)=><CartItem key={item?.id} item={item} />)}
         </div>

         <div className='px-5 h-[100vh] sticky top-0 mt-5 lg:mt-0'>
            <div className='border p-4 mt-4'>
              <p className='uppercase font-bold opacity-60 pb-4 '>Price details</p>
              <Divider/>

              <div className='space-y-3 font-semibold'>
                 <div className='flex justify-between pt-3 text-black'>
                    <span>
                    Price ({order.order?.tortalItem} items)
                    </span>
                    <span>
                     ₹ {order.order?.totalPrice}
                    </span>
                 </div>

                 <div className='flex justify-between pt-3 text-black'>
                    <span>
                        Discounted Price
                    </span>
                    <span className='text-green-500'>
                     ₹ {order.order?.totalDiscountedPrice}
                    </span>
                 </div>

                 <div className='flex justify-between pt-3 text-black'>
                    <span>
                        Discount
                    </span>
                    <span className='text-indigo-500'>
                      ₹ {order.order?.discount}
                    </span>
                 </div>

                 <div className='flex justify-between pt-3 text-black'>
                    <span>
                        Delivery Charge
                    </span>
                    <span className='text-green-500'>
                      Free
                    </span>
                 </div>
                 <Divider/>
                 <div className='flex justify-between pt-3 text-black'>
                    <span className='font-bold'>
                        Total Amount
                    </span>
                    <span>
                    ₹ {order.order?.totalDiscountedPrice}
                    </span>
                 </div>
                 
                 
                 <Button onClick={handlePay} className=' w-full' sx={{px:"2.5rem", py:"0.7rem", bgcolor:"blue", marginBottom:"2.5rem"}}
                  variant='contained'>
                    Pay
                 </Button>


              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default OrderSummery
