import React, {useState} from 'react'
import styled from 'styled-components'
import {Input, Case} from '../components/FormElements'

const CheckBox = () => {

  const [ checked, setChecked ] = useState(false)

  return (
    <div>
      <Case

        id="checkbox-manager"
        type="checkbox"
        
        onChange={()=> setChecked(!checked)}
        
    />
    <label>managed by me</label>
    </div>
  )
}

export default CheckBox
