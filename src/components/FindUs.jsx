import React from 'react'
import MapComponent from './MapComponent'

export default function FindUs() {
  return (
    <div>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>FIND US </h1>
          <h2 className='text-gray-400 mt-10 text-2xl'>More than 10 locations Around Singapor </h2>
        </div>
      <div className='flex justify-center'>
           <div className='flex flex-col'>
      left
      <p className='font-bold bg-blue-400 text-lg'>Region</p>
      <p className='mt-7 font-bold bg-blue-400 text-lg'>Branch</p>
      <p> <span className='font-bold bt-7'>Address:</span>  <span className='text-gray-400'>67 Newton Grove #04-63</span></p>
     <p><span className='font-bold'> Branch Contact number: </span> <span className='text-gray-400'>  +65 6111 2222 </span></p>
      <p className='text-gray-400 mt-7'>5 minute walk from MRT </p>
            </div>
      <div>


        <MapComponent />
      </div>
      </div>
    </div>
  )
}
