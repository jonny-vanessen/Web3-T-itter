import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import "./App.css";
import { useMoralis } from 'react-moralis';
import { ConnectButton, Icon } from 'web3uikit';


const App = () => {

  const { isAuthenticated, Moralis } = useMoralis();

  const logout = async () => {
    await Moralis.User.logOut();
    window.location.reload();
  };

  return (
    <>
      {isAuthenticated ? (
        <div className='page'>
          <div className='left-sidebar'>
            <LeftSidebar />
            <div className='logout' onClick={() => logout()}>Logout</div>
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
      ) : (
        <div className='login-page'>
          <Icon fill='#ffffff' size={40} svg='twitter' />
          <ConnectButton />
        </div>
      )}
    </>
  );
};

export default App;
