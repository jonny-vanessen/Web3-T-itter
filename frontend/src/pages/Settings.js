import { useState, useRef } from "react";
import './Settings.css';
import { Input } from 'web3uikit';
import pfp1 from '../images/pfp1.png';
import pfp2 from '../images/pfp2.png';
import pfp3 from '../images/pfp3.png';
import pfp4 from '../images/pfp4.png';
import pfp5 from '../images/pfp5.png';
import { defaultImgs } from '../defaultImgs';
import { useMoralis } from 'react-moralis';


const Settings = () => {

  const pfps = [pfp1, pfp2, pfp3, pfp4, pfp5];
  const [selectedPfp, setSelectedPfp] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const [theFile, setTheFile] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();
  const { Moralis } = useMoralis();

  const saveEdits = async () => {
    const User = Moralis.Object.extend('_User');
    console.log(User);
  };

  const onBannerClick = () => {
    inputFile.current.click();
  };

  const handleChange = (e) => {
    const img = e.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

  return (
    <>
      <div className='page-identify'>Settings</div>
      <div className='settings-container'>
        <Input
          label='Name'
          name='change Name'
          width='100%'
          labelBgColor='141d26'
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          label='Bio'
          name='Update bio'
          width='100%'
          labelBgColor='141d26'
          onChange={e => setBio(e.target.value)}
        />

        <div className='pfp'>
          Change Profile Image (Your NFTs)
          <div className='pfp-options'>
            {pfps.map((pic, i) => {
              return (
                <img
                  src={pic}
                  className={selectedPfp === pic ? 'pfp-option-selected' : 'pfp-option'}
                  onClick={() => { setSelectedPfp(pfps[i]); }}
                  alt='pfp'
                />
              );
            })}
          </div>
        </div>
        <div className='pfp'>
          Change Profile Banner
          <div className='pfpOptions'>
            <img className='banner' src={selectedFile} onClick={onBannerClick} alt="banner" />
            <input
              type='file'
              name='file'
              ref={inputFile}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <div className='save-btn' onClick={() => saveEdits()}>
          Save
        </div>
      </div>
    </>
  );
};

export default Settings;
