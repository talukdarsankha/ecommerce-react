

import React from 'react'

function AddressCard({address}) {
  return (
    <div className='space-y-2'>
      <p className='font-semibold'>{address?.firstName+" "+address?.lastName}</p>
      <p>{address?.streeAddress}</p>
      <p>City :{address?.city+" "} , State :{address?.state}</p>
      <div className='space-y-1 flex space-x-3 items-center'>
        <p className='font-semibold'>Phone Number: </p>
        <p>{address?.mobile}</p>
      </div>
      <div className='space-y-1'>
        <p className='font-semibold'>Zip/Pin Code : {address?.zipCode}</p>
      </div>
     
    </div>

    
  )
}

export default AddressCard
