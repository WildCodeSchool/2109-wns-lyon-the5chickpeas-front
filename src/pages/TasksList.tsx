import React from 'react'
// styles
import styled from 'styled-components';
import { Container } from './styles';
// components
import HeadBar from '../components/HeadBar';
import SideBar from '../components/SideBar';

import BordedContainer from '../components/BordedContainer';


export type Project = {
  manager_id: number,
  name: string, 
  status_id: number,
  due_date: string,
  description: string, 
  intitial_time_estimee: number

}

const TasksList = () => {


  return (
    <Container className="flex">
      <HeadBar />
      <MainWithBox>
        <SideBar />
        <BordedContainer/>
        
          
      </MainWithBox>
            
    </Container>
  )
}

const MainWithBox = styled.main`
    margin-top: 80px;
    width: 100%
    display: flex;
    flex-position: row;
    align-item: flex-start;

`; 

export default TasksList