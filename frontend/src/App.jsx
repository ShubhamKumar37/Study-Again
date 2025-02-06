import { Outlet } from "react-router-dom";
import "./App.css";
import { FooterSection, NavBar } from "./components";

function App() {
  return (
    <div className="w-full text-white font-inter">
      <div className='bg-richblack-900'>
        <NavBar />
      </div>
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default App;
