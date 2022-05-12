import { useState, useRef } from "react";
import "./Home.css";
import { defaultImgs } from '../defaultImgs';
import { TextArea, Icon } from 'web3uikit';

const Home = () => {

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();

  const onImgClick = () => {
    inputFile.current.click();
  };

  const handleChange = (e) => {
    const img = e.target.files[0];
    setSelectedFile(URL.creatteObjectURL(img));
  };

  return (
    <>
      <div className='main-content'>
        <div className='profile'>
          <img src={defaultImgs[0]} className='profile-pic' alt="profile picture" />
          <div className='tweet-input'>
            <TextArea
              label=''
              name='tweetTextArea'
              value='Post your teet here'
              type='text'
              width='95%'
            />
            {selectedFile && (
              <img src={selectedFile} className='tweet-img' />
            )}
            <div className='img-or-tweet'>
              <div className='img-div' onClick={onImgClick}>
                <input
                  type='file'
                  name='file'
                  ref={inputFile}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <Icon fill='#1DA1F2' size={20} svg='image' />
              </div>
              <div className='tweet-options'>
                <div className='tweet'>Tweet</div>
                <div className='tweet' style={{ backgroundColor: '#8247e5' }}>
                  <Icon fill='#ffffff' size={20} svg='matic' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
