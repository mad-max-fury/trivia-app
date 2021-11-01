import React, { useState } from 'react'
import './ConfigLayout.css'
import { useDispatch } from 'react-redux';
import { handleCategory, handleLevel, handlenOQ } from '../redux/action';
const ConfigLayout = ({ opts, label, type }) => {

  const dispatch = useDispatch()
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value)
    switch (label) {
      case "category":
        dispatch(handleCategory(target.value))
        break
      case "level":
        dispatch(handleLevel(target.value.toLowerCase()))
        break
      default:
        dispatch(handlenOQ(Number(target.value)))
        break
    }
  }


  return (type === "number" ? <div className="wrapperInput">
    <label htmlFor='nOQ'>No of questions :</label>
    <input type='number' id='nOQ' min='5' max='10' onChange={handleChange} placeholder='20' />
  </div> : <div className='wrapperInput'>
    <label htmlFor='sLB'>{label} :</label>
    <select value={value} label={label} id="sLB" onChange={handleChange}>
      {opts.map((options, i) => {
        return <option value={options.id} key={i}>{options.name}</option>;
      })}
    </select>
  </div>



  )
}

export default ConfigLayout
