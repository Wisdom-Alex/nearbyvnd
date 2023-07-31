import React from 'react';
import Filter from './Filter';
import Posts from './Posts';
import Marketers from './Marketers';
import  './feed.css';

function Feeds() {
  return (
    // Filter
    <div className='main-container'>
   <Filter/>
   <Posts/>
   <Marketers/>
    </div>

  )
}

export default Feeds