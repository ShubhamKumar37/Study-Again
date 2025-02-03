import { Outlet } from "react-router-dom";
import "./App.css";
import { FooterSection } from "./components";

function App() {
  return (
    <div className="w-full text-white font-inter">
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default App;
