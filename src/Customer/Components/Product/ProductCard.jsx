

import React from 'react'

import  "./ProductCard.css"
import { useNavigate } from 'react-router-dom';




function ProductCard({product}) {

   const navigate = useNavigate();


  return (
    <div onClick={()=>navigate(`/Product/${product.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
       <div className='h-[20rem]'>
          <img
           className='h-full w-full object-cover object-left-top'
          src={product.imgUrl} alt="" />
       </div>

       <div className='text-part bg-white p-3'>
          <div>
             <p className='font-bold opacity-60'>{product.brand}</p>
             <p>{product.title}</p>
          </div>

          <div className='flex items-center space-x-2'>
            <p className='font-semibold'>₹ {product.discountedPrice}</p>
            <p className='line-through'>{product.price}</p>
            <p className='font-semibold text-blue-600'>{product.discountedPercent}%</p>

          </div>
       </div>
    </div>
  )
}

export default ProductCard


