import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-richblack-900 text-white font-inter">
      <Outlet />
    </div>
  );
}

export default App;
