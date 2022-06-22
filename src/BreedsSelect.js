// DO NOT DELETE
import * as React from 'react'


export const BreedsSelect = (props) => {
  console.log(props.breeds);
  const option = props.breeds.map((data, index) => <option value={data} key={index}>{data}</option>)

  const setBreed = (e) => {
    props.setSelectedBreed(e.target.value)
    // getImgList(e.target.value)
  }

  const getImgList = () => {
    console.log(props.selectedBreed);
    fetch(`https://dog.ceo/api/breed/${props.selectedBreed}/images/random/3`).then(res => res.json()).then((result) => {
      const imgArr = [result.message]
      imgArr.forEach((elm) => {
        props.setImgList(arr => [...arr, elm])
        console.log(props.imgList);
      })
    })
  }
  //       // console.log(selectedBreed);
  //       })
  // }
  // let value = ""
  // const selectChange = (e) => {
  //   value = e.target.value
  // }
  // const option = 
  // const breeds = props.breeds
  // const listBreeds = breeds.map((option) => <li key={option.toString}>{{option}}</li>)
  return (
    <div>
      <div>
        <label>
          Breeds List
          <select value={props.selectedBreed} onChange={setBreed}>

            {option}
            
            {/* <option value={props.breeds}>
            {props.breeds}
              </option> */}

            


            
          </select>
        </label>
        <button onClick={getImgList}>表示</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}
