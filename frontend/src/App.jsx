import { Outlet } from "react-router-dom";
import "./App.css";
import { FooterSection, NavBar } from "./components";

function App() {
  return (
    <div className='w-full font-inter text-white'>
      <div className='bg-richblack-900'>
        <NavBar />
      </div>
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default App;
