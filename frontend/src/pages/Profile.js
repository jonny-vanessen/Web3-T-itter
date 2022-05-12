import React from "react";
import './Profile.css';
import { defaultImgs } from '../defaultImgs';


const Profile = () => {


  return (
    <>
      <div className='page-identify'>Profile</div>
      <img className='profile-banner' src={defaultImgs[1]} alt="profile-banner" />
    </>
  );
};

export default Profile;
