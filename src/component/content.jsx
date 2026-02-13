import { Link } from "react-router-dom";
import React from "react";
import test from "../move-on-click/test";
function Content() {
  return (
    <>
      <div className="">
        <h1 className="text-white ml-32 text-2xl mt-4">ລວມຫນັງທັງຫມົດ :</h1>
        <p className="text-white ml-32 mt-4">
          ເວັບໄຊສ໌ເເນະນຳ ຫນັງດີ ຫນັງມ່ວນ ທັງຫນັງໄທ ເເລະ ຫນັງຕ່າງປະເທດ
        </p>
      </div>
      <p className="text-white text-3xl ml-32 mt-10 mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 inline-flex h-11 items-center rounded-xl">
        ຫນັງທີ່ພວກເຮົາເເນະນຳ
      </p>
      <div className="grid grid-cols-5 gap-10  mx-32">
       <Link to='/test'> 
       <div className="">
          <img
            src="https://image.tmdb.org/t/p/original/dbhk3PV7TmaL0FcelsArLFW0rRO.jpg"
            alt=""
            className=" rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"
          />
          <p className="text-white ml-2 mt-2 text-ml">
            20 เซนจูรี่ รักนี้ซาบซ่า
            <br />
            20th Century Girl
          </p>
        </div>
        </Link>

        <Link to='/fast'>
        <div>
          <img
            src="/WhatsApp Image 2026-02-08 at 16.34.56.jpeg"
            alt=""
            className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"
          />
          <p className="text-white ml-2 mt-2 text-ml">
            🎬 Fast & Furious 7 – ຄວາມໄວ ຄວາມແຮງ ແລະຄຳວ່າ “ຄອບຄົວ”
          </p>
        </div>
        </Link>

        <Link to='/therain'>
        <div>
          <img src="/2.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            The Raid – ບຸກຕາຍອາຄານນະລົກ
          </p>
        </div>
        </Link>

        <Link to='/extension'>
        <div>
          <img src="/1.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            Extraction – ພາລະກິດຕາຍທີ່ຄົນບໍ່ມີຫຍັງໃຫ້ເສຍ, ເລືອກ, ຮັບ{" "}
          </p>
        </div>
        </Link>

        <Link to='/jonh'>
        <div>
          <img src="/3.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            John Wick – ຕຳນານຂອງຄົນທີ່ບໍ່ຄວນມີໃຜໄປລ້ຳເສັ້ນ
          </p>
        </div>
        </Link>
        <div>
          <img src="/4.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            Ong-Bak – ສັດທາທີ່ແລກດ້ວຍກຳປັ້ນ
          </p>
        </div>
        <div>
          <img src="/5.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            {" "}
            I Fine.. Thank You Love You – ຮັກວຸ່ນໆ ຂອງຄົນທີ່ຟັງບໍ່ອອກ
            ແຕ່ໃຈຮູ້ສຶກ
          </p>
        </div>
        <div>
          <img src="/6.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            ຫໍແຕ໋ວແຕກແມ່ນໜັງຕະຫຼົກ –ສະຫຍອງຂວັນສັນຊາດໄທ
          </p>
        </div>
        <div>
          <img src="/7.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            Pee Mak – ຮັກແທ້ ແມ່ນແຕ່ຜີກໍຢ້ານບໍ່ໄດ້
          </p>
        </div>
        <div>
          <img src="/8.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            {" "}
            Mr. Bean : ການຜະຈົນໄພສຸດຮາທີ່ຂ້າມພົມແດນ
          </p>
        </div>
      </div>
    </>
  );
}
export default Content;
