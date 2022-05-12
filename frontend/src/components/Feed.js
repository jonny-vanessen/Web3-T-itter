import React from 'react';
import './Feed.css';
import golf from '../images/golf.png';
import canoe from '../images/canoe.png';
import { defaultImgs } from '../defaultImgs';
import { Icon } from 'web3uikit';

const Feed = () => {
  return (
    <>
      <div className='tweet-in-feed'>
        <img src={defaultImgs[0]} className='profile-pic' />
        <div className='completed-tweet'>
          <div className='user'>
            <div className='accWhen'>0x42...314 • 1h</div>
          </div>
          <div className='tweet-content'>
            Going golfing with Jack tomorrow, SUPER excited.
            <img src={golf} alt="golfing" className='tweet-img' />
          </div>
          <div className='interactions'>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='star' />
              12
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='matic' />
            </div>

          </div>
        </div>
      </div>
      <div className='tweet-in-feed'>
        <img src={defaultImgs[0]} className='profile-pic' />
        <div className='completed-tweet'>
          <div className='user'>
            <div className='accWhen'>0x42...314 • 1h</div>
          </div>
          <div className='tweet-content'>
            Going golfing with Jack tomorrow, SUPER excited.
            <img src={golf} alt="golfing" className='tweet-img' />
          </div>
          <div className='interactions'>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='star' />
              12
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='matic' />
            </div>

          </div>
        </div>
      </div>
      <div className='tweet-in-feed'>
        <img src={defaultImgs[0]} className='profile-pic' />
        <div className='completed-tweet'>
          <div className='user'>
            <div className='accWhen'>0x42...314 • 1h</div>
          </div>
          <div className='tweet-content'>
            Going golfing with Jack tomorrow, SUPER excited.
            <img src={golf} alt="golfing" className='tweet-img' />
          </div>
          <div className='interactions'>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='star' />
              12
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='matic' />
            </div>

          </div>
        </div>
      </div>
      <div className='tweet-in-feed'>
        <img src={defaultImgs[0]} className='profile-pic' />
        <div className='completed-tweet'>
          <div className='user'>
            <div className='accWhen'>0x42...314 • 1h</div>
          </div>
          <div className='tweet-content'>
            Going golfing with Jack tomorrow, SUPER excited.
            <img src={golf} alt="golfing" className='tweet-img' />
          </div>
          <div className='interactions'>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='star' />
              12
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='matic' />
            </div>

          </div>
        </div>
      </div>
      <div className='tweet-in-feed'>
        <img src={defaultImgs[0]} className='profile-pic' />
        <div className='completed-tweet'>
          <div className='user'>
            <div className='accWhen'>0x42...314 • 1h</div>
          </div>
          <div className='tweet-content'>
            Going golfing with Jack tomorrow, SUPER excited.
            <img src={golf} alt="golfing" className='tweet-img' />
          </div>
          <div className='interactions'>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='star' />
              12
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='matic' />
            </div>

          </div>
        </div>
      </div>
      <div className='tweet-in-feed'>
        <img src={defaultImgs[0]} className='profile-pic' />
        <div className='completed-tweet'>
          <div className='user'>
            <div className='accWhen'>0x42...314 • 1h</div>
          </div>
          <div className='tweet-content'>
            Going golfing with Jack tomorrow, SUPER excited.
            <img src={golf} alt="golfing" className='tweet-img' />
          </div>
          <div className='interactions'>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='messageCircle' />
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='star' />
              12
            </div>
            <div className='interaction-count'>
              <Icon fill='#3f3f3f' size={20} svg='matic' />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
