import React from 'react';
import '../index.css';

function Home() {
  return (
    <>
      {/* <div className='header'></div> */}

      <div className='home'>
        <input type={'text'} placeholder='entetr your family name'></input><br></br>
        <input type={'text'} placeholder='enter your ploblem'></input><br></br>
        <input type={'number'} placeholder='enter your number'></input><br></br>
      </div>
    </>
  )
}

export default Home