// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'


export const DogListContainer = () => {
    const [breeds, setBreeds] = useState()
    const [selectedBreed, setSelectedBreed] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then((result) => {
              setBreeds(result.message.key)
            })
    }, [])
  
  const handleChange = event => {
    setSelectedBreed(event.target.value)
  }
    
  
  
  return (
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} handleChange={handleChange}/> 
  )
}