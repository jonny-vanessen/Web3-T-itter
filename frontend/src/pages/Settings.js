import { useState, useRef, useEffect } from "react";
import './Settings.css';
import { Input } from 'web3uikit';
// import pfp1 from '../images/pfp1.png';
// import pfp2 from '../images/pfp2.png';
// import pfp3 from '../images/pfp3.png';
// import pfp4 from '../images/pfp4.png';
// import pfp5 from '../images/pfp5.png';
import { defaultImgs } from '../defaultImgs';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';


const Settings = () => {

  const [pfps, setPfps] = useState([]);
  const [selectedPfp, setSelectedPfp] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const [theFile, setTheFile] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();
  const { Moralis, isAuthenticated, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();


  const resolveLink = (url) => {
    if (!url || !url.includes('ipfs://')) return url;
    return url.replace('ipfs://', 'https://gateway.ipfs.io/ipfs/');
  };

  useEffect(() => {
    const getNFTs = async () => {

      const options = {
        chain: 'mumbai',
        address: account
      };

      const mumbaiNFTs = await Web3Api.account.getNFTs(options);

      const images = mumbaiNFTs.result.map((nft) => {
        return resolveLink(JSON.parse(nft.metadata)?.image);
      });
      setPfps(images);
    };
    getNFTs();
  }, [isAuthenticated, account, Web3Api.account]);


  const saveEdits = async () => {
    const User = Moralis.Object.extend('_User');
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    console.log(myDetails);

    if (username) {
      myDetails.set('username', username);
    }
    if (bio) {
      myDetails.set('bio', bio);
    }
    if (selectedPfp) {
      myDetails.set('pfp', selectedPfp);
    }

    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      myDetails.set('banner', file.ipfs());
    }

    await myDetails.save();
    window.location.reload();
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
