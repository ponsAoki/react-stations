// DO NOT DELETE
import * as React from 'react'


/**
 * 
 * @type {React.FC}
 */

export const DogImage = (props) => {
  
  return (
    <div>
      <img className='img' src={props.url} alt="犬の画像です。"></img>
      <div className='btn'>
        <button onClick={props.api}>更新</button>
      </div>
    </div>
  )
}