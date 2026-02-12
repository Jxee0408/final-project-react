import React from 'react'

function Login() {
  return (
    <>
    <div className='flex justify-center items-center h-200 '>
      <div className='bg-white h-170 w-170 mt-5 rounded-bl-4xl  rounded-tl-4xl flex justify-center '>
        <p className=' absolute text-orange-600 text-4xl mt-60 ml-5 text-shadow-zinc-950 text-shadow-2xs'>ຍິນດີຕອນຮັບ ເຂົ້າສູ່ເວັບໄຊສ໌ຂອງພວກເຮົາ </p>
        <p className=' absolute text-orange-500 mt-70  text-shadow-zinc-950 text-shadow-2xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam <br /> illum id aperiam neque maxime nobis, earum, magnam beatae <br /> harum possimus eos rerum, doloribus tempore hic. Fugiat modi. <br /> officia ut illum enim, totam rem impedit</p>
        <img src="/bb.jpg" alt="" className='w-full h-full object-cover object-center rounded-bl-4xl  rounded-tl-4xl'/>
      </div>

      
    <div className='bg-neutral-700 h-170 w-100 text-white mt-5 flex justify-center items-center  rounded-br-4xl  rounded-tr-4xl'>

      <div className=''>
        <p className='text-white  text-4xl mb-10 flex justify-center text-shadow-2xs'>ສະມັກສະມາຊິກ</p>
         <div className='outline rounded-lg w-60 h-10 flex items-center mb-5'>
        <input type="text" placeholder='ຊື່ຜູ້ໃຊ້' className=' outline-none ml-1 '/>
     </div>
        <div className='outline rounded-lg w-60 h-10 flex items-center'>
        <input type="text" placeholder='ເບີໂທສັບຂອງທ່ານ' className=' outline-none ml-1'/>
     </div>
        <div className='outline rounded-lg w-60 h-10 flex items-center mt-5'>
        <input type="password" placeholder='ລະຫັດຜ່ານ' className=' outline-none ml-1'/>
     </div>
     <div className='flex justify-end cursor-pointer mt-2'>
      ທ່ານລືມລະຫັດຜ່ານ?
     </div>
     <div className='flex justify-center'>
      <button className='bg-orange-600 text-white px-22 py-2 rounded-md mt-5'>ເຂົ້າສູ່ລະບົບ</button>
     </div>
       
       
      </div>
</div>
</div>

  
    </>
  )
}

export default Login