import "./App.css";
import { Routes, Route ,useLocation} from 'react-router-dom';
import Nav from "./component/nav";
import NavMenu from "./component/nav-menu";
import Boximg from "./component/head-top";
import Content from "./component/content";
import Contenttwo from "./component/content-2";
import Katoon from "./component/katoon-content";
import Footer from "./component/footer";
import Page1 from "./Menu-click-nav/page1";
import Aboutus from "./Menu-click-nav/Aboutus";
import New from "./Menu-click-nav/New";
import Login from "./Menu-click-nav/Login";
import Test from "./move-on-click/test";
import Fast from "./move-on-click/Fast";
import Jonh from "./move-on-click/jonh";

function App() {
  const location = useLocation();
  return (
      <div className="bg-neutral-900">
        <Nav />

        <NavMenu />

        <Routes>

          <Route path="/" element={
            <>
              <Boximg />
              <Content />
              <Contenttwo />
              <Katoon />
            </>
          } />
          <Route path="/katoon" element={<Katoon />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/new" element={<New />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/fast" element={<Fast />} />
          <Route path="/jonh" element={<Jonh />} />



        </Routes>
       {location.pathname !== '/login' && <Footer />}
        
      </div>
  );
}

export default App;