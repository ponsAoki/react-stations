// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'


export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState("")
  const [imgList, setImgList] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then((result) => {
                const dogObj = [result.message]
                    //以降は下記の1, 2どちらでもあり
                    //1.
                dogObj.forEach(elm => {
                        Object.keys(elm).forEach(key => {
                            setBreeds(defaArr => [...defaArr, key])
                        })
                    })
                    //2.
                    // const dogArr = []
                    // for (var prop in dogObj) {
                    //   if (dogObj.hasOwnProperty(prop)) {
                    //     var innerObj = {}
                    //     innerObj[prop] = dogObj[prop]
                    //     dogArr.push(innerObj)
                    //   }
                    // }
                    // for (let i = 0; i < dogArr.length; i++) {
                    //   const dogElm = Object.keys(dogArr[i])
                    //   console.log(dogElm[0]);
                    //   setBreeds(state => [...state, dogElm[0]])
                    //   console.log(breeds);
                    // }
            })
    }, [])
    // const getImgList = (e) => {
    //   fetch(`https://dog.ceo/api/breed/${e}/images/random/3`).then(res => res.json()).then((result) => {
    //       const imgArr = [result.message]
    //       imgArr.forEach((elm) => {
    //         setImgList(arr => [...arr, elm])
    //         console.log(imgList);
    //       })
    //       // console.log(selectedBreed);
    //       })
    // }



  return (<BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} imgList={imgList} setImgList={setImgList} /> 
    )
}