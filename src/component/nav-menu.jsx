import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <nav className="bg-neutral-900 h-13  min-h-10 flex items-center justify-left">
      <ul className="flex gap-20 text-white ml-32">
        <li><Link to="/" className=" hover:text-orange-500">ຫນ້າຫລັກ</Link></li>
        <li><Link to="/page1" className=" hover:text-orange-500">ຫມວດຫມູ່</Link></li>
        <li><Link to="/new" className=" hover:text-orange-500">ຂ່າວ</Link></li>
        <li><Link to="/Aboutus" className=" hover:text-orange-500">ກ່ຽວກັບເຮົາ</Link></li>
    
      </ul>
    </nav>
  );
}
export default NavMenu;
