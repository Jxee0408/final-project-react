import Boximg from "../component/head-top";
import { Link } from "react-router-dom";

function Page1() {
    return (
        <>
        
            <Link to='/jonh' className="relative flex">
          <div className="min-h-120 w-full h-180 mx-auto flex justify-center items-center">
            <img src="https://c4.wallpaperflare.com/wallpaper/52/373/222/john-wick-movie-keanu-reeves-john-wick-poster-wallpaper-preview.jpg" alt="Background" className="w-full h-full "/>
            <button className="absolute bg-red-500 text-white px-4 py-2 rounded-md mt-96  cursor-pointer">ຄິກເພື່ອເບິ່ງຂໍ້ມູນ</button>
            <button className="absolute text-white px-2 py-1 rounded-xl mt-[470px] cursor-pointer bg-black/50 ">ເເນວຫນັງ : ເເອັກຊັນ</button>
        </div>
            </Link>

    <p className="text-white ml-32 mt-4 text-4xl mb-8 mt-10 underline decoration-amber-400"    >8 ຫນັງໄທ ທີ່ຄົນເບິ່ງຫນັງໄທ ຕ້ອງເບິ່ງ</p>
    <div className="grid grid-cols-5 gap-10  mx-32">
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
         <div><img src="/15.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> ແຟນຂອງຂ້ອຍ (My Girl)</p></div>
                         <div><img src="/16.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> ລອດລາຍມັງກອນ</p></div>
                <div><img src="/17.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> 🎬 ສິ່ງນ້ອຍໆ ທີ່ເອີ້ນວ່າ… ຄວາມຮັກ</p></div>
                                <div><img src="/13.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> ຄິດຮອດວິທະຍາ — ຄວາມຮັກທີ່ເລີ່ມຕົ້ນຈາກ "ຕົວໜັງສື"</p></div>
      </div>

      <div className="border border-1 border-white mt-10 w-150 mx-auto"></div>

      <p className="text-white ml-32 mt-4 text-4xl mb-8 mt-10">Animetion</p>
        <div className="grid grid-cols-5 gap-10  mx-32">
                <div><img src="/23.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-mt"> Spirited Away – ການເດີນທາງຂອງເດັກນ້ອຍ ໃນໂລກທີ່ຜູ້ໃຫຍ່ລືມຈະເຂົ້າໃຈ</p></div>
                <div><img src="/24.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-[8px] mt-[8px] text-ml mb-20"> Your Name – ຊື່ຂອງເຈົ້າ… ທີ່ຫົວໃຈຂ້ອຍບໍ່ເຄີຍລືມ </p></div> 
                 <div><img src="/10.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml">  Doraemon The Movie – ຜະຈົນໄພທຸກຄັ້ງ ແຕ່ມິດຕະພາບບໍ່ເຄີຍປ່ຽນ</p></div> 
                <div><img src="/11.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml">  Toy Story – ຄວາມຮັກ ແລະມິດຕະພາບຂອງຂອງຫນັງ ທີ່ບໍ່ເຄີຍສິ້ນສຸດ</p></div>
                <div><img src="/12.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml">  Kung Fu Panda – ນັກຮົບມັງກອນ ທີ່ບໍ່ເຄີຍເຊື່ອວ່າຕົນເອງຈະເຮັດໄດ້ 🐉</p></div>







        </div>

        <p className="text-white ml-32 mt-4 text-4xl mb-8 mt-10 ">13 ຫນັງຕ່າງປະເທດ ທີ່ຕ້ອງໄດ້ເບິ່ງ :</p>

          <div className="grid grid-cols-5 gap-10  mx-32">
                 <div><img src="/9.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> The Hangover – ຄືນດຽວພັງ ຈື່ທັງຊີວິດ</p></div>
                <div><img src="/14.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> Forrest Gump – ຊີວິດທີ່ແລ່ນໄກກວ່າຂີດຈຳກັດ</p></div>
                <div><img src="/18.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> The Pursuit of Happyness – ການຕາມຫາຄວາມສຸກ    </p></div>

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
        <div>
          <img src="/2.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            The Raid – ບຸກຕາຍອາຄານນະລົກ
          </p>
        </div>
        <div>
          <img src="/1.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            Extraction – ພາລະກິດຕາຍທີ່ຄົນບໍ່ມີຫຍັງໃຫ້ເສຍ, ເລືອກ, ຮັບ{" "}
          </p>
        </div>
        <div>
          <img src="/3.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            John Wick – ຕຳນານຂອງຄົນທີ່ບໍ່ຄວນມີໃຜໄປລ້ຳເສັ້ນ
          </p>
        </div>
        <div>
          <img src="/8.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer" />
          <p className="text-white ml-2 mt-2 text-ml">
            {" "}
            Mr. Bean : ການຜະຈົນໄພສຸດຮາທີ່ຂ້າມພົມແດນ
          </p>
        </div>

         <div><img src="/19.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> Notting Hill – ເມື່ອຄວາມຮັກ ບໍ່ຮູ້ຈັກຄຳວ່າ “ຊົນຊັ້ນ” </p></div>
                <div><img src="/20.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml">  Crazy Rich Asians – ຮັກວຸ່ນໆ ຂອງຄົນຮັ່ງມີສຸດຂີດ </p></div>
                <div><img src="/21.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml">Titanic — ໜັງຄວາມຮັກອະມະຕະ ທີ່ບໍ່ໄດ້ຈົມລົງໄປພ້ອມກັບເຮືອ ແຕ່ຝັງຢູ່ໃນຫົວໃຈຄົນເບິ່ງທົ່ວໂລກ</p></div>
                <div><img src="/22.jpeg" alt="" className="rounded-2xl hover:scale-103 transition-transform duration-300 cursor-pointer"/><p className="text-white ml-2 mt-2 text-ml"> About Time – ຖ້າເຮົາຍ້ອນເວລາໄດ້ ເຮົາຈະເລືອກຮັກແນວໃດ?</p></div>



        </div>

        </>
    )
}
export default Page1;