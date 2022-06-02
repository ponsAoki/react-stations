// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState} from 'react'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
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
    <html>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <div>
        <section className='container'>
          <div className='desc'>犬の画像を表示するサイトです。
          </div>
          <div>
            <img className='img' src={dogUrl} alt="犬の画像です。"></img>
            <div className='btn'>
              <button onClick={useAPI}>更新</button>
            </div>
          </div>
        </section>
        <hr></hr>
      </div>
    </html>
  )
}
