import { useState, useEffect } from 'react';
import './index.css';

export default function App() {

  return (
    <div className='nokia-phone'>
      <div className='top'>
        <div className='heading'> SNAKE GAME </div>
        <div className='screen'> </div>
        <div className='show-button'> </div>
      </div>
      <div className='bottom'>
        <div className='col-1'>
          <div className='num-1'> 1 </div>
          <div className='num-4'> 4 </div>
          <div className='num-7'> 7 </div>
          <div className='num-star'> * </div>
        </div>
        <div className='col-2'>
          <div className='num-2'> 2 </div>
          <div className='num-5'> 5 </div>
          <div className='num-8'> 8 </div>
          <div className='num-0'> 0 </div>
        </div>
        <div className='col-3'>
          <div className='num-3'> 3 </div>
          <div className='num-6'> 6 </div>
          <div className='num-9'> 9 </div>
          <div className='num-#'> # </div>
        </div>
      </div>
    </div>
  )
}

