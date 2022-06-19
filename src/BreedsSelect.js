// DO NOT DELETE
import * as React from 'react'


export const BreedsSelect = (props) => {
  console.log(props.breeds);
  // const breeds = props.breeds
  // const listBreeds = breeds.map((option) => <li key={option.toString}>{{option}}</li>)
  return (
    <div>
      <label>
        Breeds List
        <select value={props.selectedBreed} onChange={props.handleChange}>
          
            <option>
              {props.breeds}
            </option>

          


          
        </select>
      </label>
      <button>表示</button>

    </div>
  )
}
