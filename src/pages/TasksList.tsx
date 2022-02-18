import React, { useState} from 'react'
// styles
import styled from 'styled-components';
import { Container } from './styles';
// components
import HeadBar from '../components/HeadBar';
import SideBar from '../components/SideBar';
import { Input, Form, ButtonSignUp } from '../components/FormElements';

const TasksList = () => {
  return (
    <Container className="flex">
            <HeadBar />
            <Main className="flex">
                {/* Sidebar */}
                <SideBar />

            </Main>
        </Container>
  )
}

const Main = styled.main`
    margin-top: 80px;
`;

export default TasksList