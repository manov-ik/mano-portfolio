import NavBar from "./components/navBar";
import "./App.css";
import Home from "./components/home";
import Skill from "./components/skill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fotter from "./components/fotter";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="bg-[#1A191D] bg-grid min-h-screen cursor-none">
      <CustomCursor />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </BrowserRouter>
      <Fotter />
    </div>
  );
}
export default App;
