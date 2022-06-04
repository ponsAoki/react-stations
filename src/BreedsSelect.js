// DO NOT DELETE
import * as React from 'react'


export const BreedsSelect = (props) => {
  const Add = props.breeds.map(Add => Add)
  const handleChange = (e) => props.setSelectedBreed((props.breeds[e.target.value]))
  return (
    <label>
      Breeds List
      <select value={props.selectedBreed} onChange={e => handleChange(e)}>
        {
          Add.map((address, key) => <option value={key}>{address}</option>)
        }
        
      </select>
    </label>
  )
}
