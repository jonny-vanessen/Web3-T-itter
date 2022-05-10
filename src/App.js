import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";
import LeftSidebar from './components/LeftSidebar';
import "./App.css";


export default function App() {
  return (
    <>
      <div className='page'>
        <div className='left-sidebar'>
          <LeftSidebar />
        </div>
        <div className="main-window">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <div className='right-sidebar'>Right Sidebar</div>
      </div>
    </>
  );
}
