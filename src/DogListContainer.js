// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'


export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
          .then((result) => {
            const dogObj = result.message
            const dogArr = []
            for (var prop in dogObj) {
              if (dogObj.hasOwnProperty(prop)) {
                var innerObj = {}
                innerObj[prop] = dogObj[prop]
                dogArr.push(innerObj)
              }
            }
            const resDogArr = []
            for (let i = 0; i < dogArr.length; i++) {
              const dogElm = Object.keys(dogArr[i])
              console.log(dogElm[0]);
              resDogArr.push(dogElm[0])
              setBreeds(state => [...state, dogElm[0]])
              console.log(breeds);
            }
            // const resArr = []
            // dogObj.forEach(elm => {
            //   Object.keys(elm).forEach(key => {
            //     resArr.push(key)
            //     setBreeds(defaArr => [...defaArr, key])
            //   })
            // })
            })
    }, [])
  
  const handleChange = event => {
    setSelectedBreed(event.target.value)
  }
    
  
  
  return (
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} handleChange={handleChange}/> 
  )
}