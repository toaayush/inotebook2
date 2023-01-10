import React from 'react'
import prof from './prof.jpg';

function Prof() {
  return (
    <div className='text-light mx-3'>
      <img src={prof} alt="" style={{width:"3vw", height:"3vw", borderRadius:"1.5vw", backgroundColor:"white", objectFit: "cover"}}/>
    </div>
  )
}

export default Prof
