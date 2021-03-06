import React, { useEffect, useState, Fragment } from "react";
import './RightSidebar.css';
// import spaceshooter from "../images/spaceshooter.jpeg";
// import netflix from "../images/netflix.jpeg";
// import academy from "../images/academy.png";
// import youtube from "../images/youtube.png";
// import js from "../images/js.png";
import { Input } from 'web3uikit';


const RightSidebar = () => {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      // console.log(data);
      setBackendData(data);
      // setBackendData(JSON.stringify(response));
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then(data => setBackendData(data));
  // }, []);


  return (
    <>
      {/* {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}
      <div className='content'>
        <Input
          label='Search'
          name='Search'
          prefixIcon='search'
          labelBgColor='22272e' />
        <div className='news-articles'>
          News for you
          {backendData.map((article, i) => {
            return (
              <Fragment key={i}>
                <div className='article' onClick={() => window.open(article.url)}>
                  {/* <img src='' alt='something' className='article-img' /> */}
                  <div className='article-title'>{article.title}</div>
                  <div className='article-source'>{article.source}</div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
