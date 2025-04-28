import React from 'react'

import { useState } from "react";

export default function Body() {
  


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <div className='flex justify-around bg-[#E5E5E5] pt-[300px]'>
      
      <div>

<div className='flex flex-col'>
<p className='font-bold text-2xl '>General Enquiries</p>
<h3 className='font-bold mt-8'>Call center operation Hour</h3>
<p className='mt-5'>Mon to Fri: 1pm to 8pm</p>
<p>
Sat & Sun: 9am to 6pm</p>
<p className='mt-5 text-gray-400'>
(Closed on public holidays and observed public holidays.)

</p>


<p className='font-bold mt-8'>Hotline</p>
<p className='mt-5 text-gray-400'>(+65) 6123 4567</p>
<h2 className='font-bold text-lg mt-3'>Opening hours:</h2>
<p className='mt-5'>Mon to Fri:  10am to 8pm</p>
<p>Sat & Sun:  9am to 6pm</p>


<p className='text-gray-400 mt-3'>(Closed on public holidays and observed public holidays.)</p>
<p className='font-bold mt-7' >Email</p>
<p className='mt-4 text-gray-400'>enquiry@smarttuition.com.sg </p>
</div>
      </div>
      <div className='w-[500px] bg-[#ADD8E6] rounded-2xl p-1'>
      <div className='flex flex-col'>
      <h1 className='text-xl font-bold text-center'>Register Now with Us</h1>
      <form action="">
      <label htmlFor="Salutations" className='ml-5'>SALUTATIONS</label>
      <input 
      type="text"  
      name='Salutations' 
      value={formData.salutation}
      onChange={handleChange}
      placeholder='PLEASE SELECT' 
      className='w-md ml-5 bg-white rounded-2xl px-2' 
      required

      />
      <div className='flex justify-between mr-[130px] ml-5'>
<label htmlFor="firstname">FIRST NAME</label>
<label htmlFor="lastname">LAST NAME</label>
</div>
<div className='flex justify-between'>

      <input 
      type="text"  
      name='firstname' 
      value={formData.firstname}
      onChange={handleChange}
      placeholder='PLEASE SELECT' 
      className='w-3xs ml-5 bg-white rounded-2xl px-2' 
      required
        
      />
      
      <input 
      type="text"  
      name='lastname' 
      value={formData.lastname}
      onChange={handleChange}
      placeholder='PLEASE SELECT' 
      className='w-3xs ml-5 bg-white rounded-2xl px-2' 
      required
        
      />

</div>
 <div className='flex justify-between mr-[130px] ml-5'>
<label htmlFor="firstname">FIRST NAME</label>
<label htmlFor="lastname">LAST NAME</label>
</div>
<div className='flex justify-between'>

      <input 
      type="text"  
      name='firstname' 
      placeholder='PLEASE SELECT' 
      className='w-3xs ml-5 bg-white rounded-2xl px-2' 
      required
        
      />
      
      <input 
      type="text"  
      name='lastname' 
      placeholder='PLEASE SELECT' 
      className='w-3xs ml-5 bg-white rounded-2xl px-2' 
      required
        
      />

</div>
 <div className='flex justify-between mr-[130px] ml-5'>
<label htmlFor="firstname">FIRST NAME</label>
<label htmlFor="lastname">LAST NAME</label>
</div>
<div className='flex justify-between'>

      <input 
      type="text"  
      name='firstname' 
      placeholder='PLEASE SELECT' 
      className='w-3xs ml-5 bg-white rounded-2xl px-2' 
      required
        
      />
      
      <input 
      type="text"  
      name='lastname' 
      placeholder='PLEASE SELECT' 
      className='w-3xs ml-5 bg-white rounded-2xl px-2' 
      required
        
      />

</div>



<label htmlFor="Salutations" className='ml-5'>SALUTATIONS</label>
      <input 
      type="text"  
      name='Salutations' 
      placeholder='PLEASE SELECT' 
      className='w-md ml-5 bg-white rounded-2xl px-2' 
      required

      />



<label htmlFor="Salutations" className='ml-5'>SALUTATIONS</label>
      <input 
      type="text"  
      name='Salutations' 
      placeholder='PLEASE SELECT' 
      className='w-md ml-5 bg-white rounded-2xl px-2' 
      required

      />






<label htmlFor="Salutations" className='ml-5'>SALUTATIONS</label>
      <input 
      type="text"  
      name='Salutations' 
      placeholder='PLEASE SELECT' 
      className='w-md ml-5 bg-white rounded-2xl px-2' 
      required

      />

<p className='my-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium, 
quo tenetur nam alias atque magni dolorem commodi est, harum quas eum repellat
</p>

      {/* Submit Button */}
      <div className='flex justify-center'>
      <button
          type="submit"
          className="w-2/5 bg-blue-500 font-bold py-1  rounded-xl hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        </div>
      </form>
      
      </div>
        
      </div>
    </div>
  )
}
