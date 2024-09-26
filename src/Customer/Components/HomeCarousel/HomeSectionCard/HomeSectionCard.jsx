


import React from 'react'

function HomeSectionCard({item}) {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg shad overflow-hidden w-[15rem]  m-3 py-2'>
       <div className='h-[13rem] w-[10rem]' >
          <img
           className='object-cover object-top w-full h-full rounded-md'
          src={item.imageUrl} alt="" />
       </div>

       <div className='p-4'>
         <h3 className='text-lg text-gray-500'>{item.brand}</h3>
         <p className='mt-2 text-sm text-gray-900'>{item.title}</p>
       </div>
    </div>
  )
}

export default HomeSectionCard


