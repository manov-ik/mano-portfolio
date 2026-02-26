import NavBar from "./components/navBar";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Fotter from "./components/fotter";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/Projects";
import ProjectDetailPage from "./components/ProjectDetailPage";
import More from "./components/More";
import Writes from "./components/Writes";
import WriteDetailPage from "./components/WriteDetailPage";

function App() {
  return (
    <div className="bg-[#1A191D] bg-grid min-h-screen cursor-none">
      <CustomCursor />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/writes" element={<Writes />} />
          <Route path="/writes/:id" element={<WriteDetailPage />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}
export default App;
