import React from 'react'

function Aboutus() {
  return (

    <div className='h-96'>

        <div className='flex justify-center gap-60 mt-20'>

        <div className=''>
    <h1 className='text-white text-4xl mb-2'>ABOUT US</h1>
    <p className='text-white text-sm '>
        Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.<br />
        adipisicing elit. Voluptatum, deleniti beatae quam saepe ea,<br />
        cum nostrum officia dicta harum nesciunt beatae quam saepe ea,<br /> 
        perferendis consectetur doloribus accusamus vero, sequi nam ad <br />
        mollitia quaerat odio assumenda, sit optio asperiores vitae, q<br />
        suscipit laboriosam magni. Error ut, voluptatibus beatae</p>
        <div className='flex gap-4 mt-4'>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded ">LEARN MORE</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded ">WHATCH</button>
        </div>

        </div>

        

    <div className=' grid grid-cols-2 gap-x-7 gap-y-7 '>
       
        <div className=' bg-white w-35 h-30 flex justify-center items-center rounded-2xl shadow shadow-gray-500/50'>
           <div className=''>
             <p className='text-4xl '>1000+</p> <p className='text-sm ml-4 text-gray-600 '>ການເຂົ້າໃຊ້ເວັບ</p>
           </div>
            </div>
        <div className=' bg-stone-300 w-35 h-30 flex justify-center items-center rounded-2xl shadow-xs shadow-white'>
           <div className=''>
             <p className='text-4xl '>20+</p> <p className='text-sm ml-3 text-gray-600'>ຫນັງດີ</p>
           </div>
            </div>
        <div className='bg-stone-300 w-35 h-30 flex justify-center items-center rounded-2xl shadow-xs shadow-white'>
           <div className=''>
             <p className='text-4xl '>10</p> <p className='text-sm  text-gray-600'>ອັນດັບເວັບ</p>
           </div>
            </div>
        <div className='bg-stone-300 w-35 h-30 flex justify-center items-center rounded-2xl shadow-xs shadow-white'>
           <div className=''>
             <p className='text-4xl '>500+</p> <p className='text-sm ml-2 text-gray-600'>ການສຳເລັດ</p>
           </div>
            </div>
       
        </div>



    </div>
    </div>
  )
}

export default Aboutus