import { Link } from "react-router-dom";
function Boximg(){
    return(
       <div className="relative min-h-[480px] w-full h-[720px] mx-auto flex justify-start items-center overflow-hidden"> 

    
    <img 
        src="https://www.acmodasi.in/amdb/images/movie/0/7/20th-century-girl-2022-17914.jpg" 
        alt="Movie Poster" 
        className="absolute w-full h-full object-cover"
    />

    <Link to='/test' className="relative flex gap-4 ml-8"> 
        
        <button className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-xl cursor-pointer w-fit">
            ເເນວຫນັງ : ຮັກ
        </button>
        
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md cursor-pointer transition-all">
            ຄິກເພື່ອເບິ່ງຂໍ້ມູນ
        </button>
    </Link>
</div>
    )
    
}




export default Boximg;