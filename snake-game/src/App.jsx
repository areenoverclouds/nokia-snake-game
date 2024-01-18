import { useState, useEffect } from 'react';
import './index.css';

export default function App() {

  return (
    <div className='nokia-phone'>
      <div className='top'>
        <div className='holder'>
          <div className='screen'> </div>
          <div className='show-button'> </div>
        </div>
          <div className='heading'> SNAKE GAME </div>
      </div>
      <div className='bottom'>
        <div className='col-1'>
          <div className='num-1'> 1 </div>
          <div className='num-1'> 4 </div>
          <div className='num-1'> 7 </div>
          <div className='num-1'> * </div>
        </div>
        <div className='col-1'>
          <div className='num-2'> 2 </div>
          <div className='num-2'> 5 </div>
          <div className='num-2'> 8 </div>
          <div className='num-2'> 0 </div>
        </div>
        <div className='col-1'>
          <div className='num-3'> 3 </div>
          <div className='num-3'> 6 </div>
          <div className='num-3'> 9 </div>
          <div className='num-3'> # </div>
        </div>
      </div>
    </div>
  )
}

