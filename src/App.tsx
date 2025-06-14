import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Header toggleSidebar={toggleSidebar} darkMode={false} toggleDarkMode={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <div className="d-flex flex-grow-1 overflow-hidden">
          <Sidebar expanded={sidebarExpanded} />
          <main className="flex-grow-1 overflow-auto bg-light">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/video/:videoId" element={<VideoPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
