import NavBar from "./components/navBar";
import "./App.css";
import Home from "./components/home";
import Skill from "./components/skill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fotter from "./components/fotter";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/Projects";
import More from "./components/More";

function App() {
  return (
    <div className="bg-[#1A191D] bg-grid min-h-screen cursor-none">
      <CustomCursor />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
      <Fotter />
    </div>
  );
}
export default App;
