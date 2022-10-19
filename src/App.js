import "./App.css";
import Dashboard from "./compoenent/dashboard";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./compoenent/projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
