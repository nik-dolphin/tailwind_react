import "./App.css";
import Dashboard from "./compoenent/dashboard";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./compoenent/projects";
import Team from "./compoenent/team";
import Calender from "./compoenent/calender";

function App() {
  return (
    <div className="h-[100vh] scrollbar">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/calender" element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
