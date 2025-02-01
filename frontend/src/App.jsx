import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-full bg-richblack-900 text-white font-inter">
      <Outlet />
    </div>
  );
}

export default App;
