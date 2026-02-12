import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav className="bg-neutral-900 h-15 flex justify-between items-center border-b-1 border-b-gray-200 ">
            <p className="text-4xl ml-31 text-white font-bold">FilmFocus</p>
            <div className="mr-33 flex items-center gap-5">
                <div className="flex items-center border-2 border-white rounded-xl py-0.5 px-0.5">
                    <img src="/search_24dp_B7B7B7_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="mr-1"/>
                    <input type="text"  placeholder="Serch" className="outline-none w-30 text-white"/>
                    <button className="bg-orange-700 text-white w-9 h-7 rounded-xl mr-0 cursor-pointer">Go</button>
                </div>
            <div className="flex gap-3">
                <Link to="/login">
                <button className="text-white bg-orange-700 h-9 w-21 rounded-sm font-bold cursor-pointer">ເຂົ້າສູ່ລະບົບ</button>
                </Link>
                <button className="text-white bg-neutral-900 h-9 w-21 rounded-sm font-bold border border-2 border-orange-700 cursor-pointer">ສະມັກ</button>
            </div>
            </div>
        </nav>

        
    )
}
export default Nav