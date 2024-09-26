

import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartAction } from '../../../Redux/Cart/Action';



function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {auth,cart} = useSelector(store=>store);

  useEffect(()=>{
    if(auth.user){
      dispatch(getCartAction())
    }
     
  },[auth.user,cart.removecCartItem,cart.updateCartItem])
  
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 py-5 relative'>
         <div className='col-span-2 space-y-2 '>
         {cart.cartItems?.map((item)=><CartItem key={item?.id} item={item}/>)}
         </div>

         <div className='px-5 h-[100vh] sticky top-0 mt-5 lg:mt-0'>
            <div className='border p-4 mt-4'>
              <p className='uppercase font-bold opacity-60 pb-4 '>Price details</p>
              <Divider/>

              <div className='space-y-3 font-semibold'>
                 <div className='flex justify-between pt-3 text-black'>
                    <span >
                        Price({cart.cart?.totalItem} items)
                    </span>
                    <span className='line-through'>
                      ₹ {cart.cart?.totalPrice}
                    </span>
                 </div>

                 <div className='flex justify-between pt-3 text-black'>
                    <span>
                        Discounted Price
                    </span>
                    <span className='text-green-500'>
                     ₹ {cart.cart?.totalDiscountedPrice}
                    </span>
                 </div>

                 <div className='flex justify-between pt-3 text-black'>
                    <span>
                       Get Discount
                    </span>
                    <span className='text-indigo-500'>
                      ₹ {cart.cart?.discount}
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
                      ₹ {cart.cart?.totalDiscountedPrice}
                    </span>
                 </div>
                 
                 
                 <Button onClick={()=>navigate(`/checkout?step=1`)} className=' w-full' sx={{px:"2.5rem", py:"0.7rem", bgcolor:"orange", marginBottom:"2.5rem"}}
                  variant='contained'>
                    Checkout
                 </Button>


              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Cart
