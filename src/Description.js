// DO NOT DELETE
import * as React from 'react'
import { DogImage } from './DogImage'
import { useState } from 'react'


/**
 * 
 * @type {React.FC}
 */

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/lhasa/n02098413_20499.jpg')

  const useAPI = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result.message)
        }
      )
  }
  return (
    <div>
      <section className='container'>
        <div className='desc'>犬の画像を表示するサイトです。
        </div>
        <DogImage url={dogUrl} api={ useAPI}/>
      </section>
      <hr></hr>
    </div>
  )
}