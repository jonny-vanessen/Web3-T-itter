import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
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
        <div className='right-sidebar'>
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
