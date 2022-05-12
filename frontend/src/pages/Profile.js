import React from "react";
import './Profile.css';
import { Link } from 'react-router-dom';
import { defaultImgs } from '../defaultImgs';
import Feed from '../components/Feed';


const Profile = () => {


  return (
    <>
      <div className='page-identify'>Profile</div>
      <img className='profile-banner' src={defaultImgs[1]} alt="profile-banner" />
      <div className='profile-container'>
        <img className='profile-picture' src={defaultImgs[0]} alt="profile" />
        <div className='profile-name'>Vango</div>
        <div className='profile-wallet'>0x42...314</div>
        <Link to='/settings'>
          <div className='profile-edit'>Edit Profile</div>
        </Link>
        <div className='profile-bio'>
          Hi its me your favorite crypto bro
        </div>
        <div className='profile-tabs'>
          <div className='profile-tab'>
            Your Tweets
          </div>
        </div>
      </div>
      <Feed profile={true} />
    </>
  );
};

export default Profile;
