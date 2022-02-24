import React, { useState } from 'react'
import styled from 'styled-components'
//import {Case} from '../components/FormElements'

//All the checkboxes in the app are listed here


export const CBHideDone = () => {

  const [ isChecked, setIsChecked ] = useState(false)

  const handleHideDone = () => {
    setIsChecked(!isChecked);
    console.log('handleHideDone')
    //filter on the projects/tasks array and don't show the ones with status_id=2

  }

  return (
    <div>
      <Case

        id="checkbox-manager"
        type="checkbox"
        onChange={handleHideDone}
        
    />
    <label>Hide Done</label>
    </div>
  )
}

export const CBManagedByMe = () => {

  const [ isChecked, setIsChecked ] = useState(false)

  const handleManagedByMe = () => {
    setIsChecked(!isChecked);
    console.log('handleManagedByMe')
    //filter on the projects/tasks array and show only the ones with manager_id = context.user_id
  };

  return (
    <div>
      <Case

        id="checkbox-manager"
        type="checkbox"
        onChange={handleManagedByMe}
        
    />
    <label>Managed by me only</label>
    </div>
  )
}
export const CBAssignedToMe = () => {

  const [ isChecked, setIsChecked ] = useState(false)

  const handleAssignedToMe = () => {
    setIsChecked(!isChecked);
    console.log('handleAssignedToMe')
    //filter on the projects/tasks array and show only the ones with Assignee = context.user_id
  };

  return (
    <div>
      <Case

        id="checkbox-manager"
        type="checkbox"
        onChange={handleAssignedToMe}
        
    />
    <label>Assigned to me</label>
    </div>
  )
}
export const CBHighPriority = () => {

  const [ isChecked, setIsChecked ] = useState(false)

  const handleHighPriority = () => {
    setIsChecked(!isChecked);
    console.log('handleHighPriority')
    //filter on the projects/tasks array and show only the ones with due_date < date.now+3 days
  };

  return (
    <div>
      <Case

        id="checkbox-manager"
        type="checkbox"
        onChange={handleHighPriority}
        
    />
    <label>High priority task</label>
    </div>
  )
}





//style
export const Case = styled.input`
    position: relative;
    width: 20px;
    height: 20px;
    margin: 10px;
    padding: 0 10px;
    font-size: 30px;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    

`;



