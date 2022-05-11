import React from "react";
import './LeftSidebar.css';
import { Link } from 'react-router-dom';
import { Icon } from 'web3uikit';


const LeftSidebar = () => {


  return (
    <>
      <div className='left-content'>
        <div className='menu'>
          <div className='logo'>
            <Icon fill='white' size={36} svg='twitter' />
          </div>
          <Link to='/' className='link'>
            <div className='menu-item'>
              <Icon fill='white' size={36} svg='list' />
              Home
            </div>
          </Link>
          <Link to='/profile' className='link'>
            <div className='menu-item'>
              <Icon fill='white' size={36} svg='user' />
              Profile
            </div>
          </Link>
          <Link to='/settings' className='link'>
            <div className='menu-item'>
              <Icon fill='white' size={36} svg='cog' />
              Settings
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
