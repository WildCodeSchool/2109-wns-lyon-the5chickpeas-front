import React from 'react';
import styled from 'styled-components';
import { Container } from './styles';
import HeadBar from '../components/HeadBar';
import { GET_TASKS } from '../components/Caroussel';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

function TaskDetail({color, buttontext}: {color?: string, buttontext?: string}) {
    const { data } = useQuery(GET_TASKS);
    const { taskId } = useParams();
    const task = data ? data.getTasks.filter((task: any) => (task.id === taskId)) : "";
    
    return (
        <Container>
            <HeadBar />
            <Main>
                <Lefter>
                    <Title>{task[0].subject}</Title>
                    <Paragraph>{task[0].description}</Paragraph>
                </Lefter>
                <Righter>
                    <h2>{task[0].subject}</h2>
                    <p>{task[0].description}</p>
                </Righter>
            </Main>      
        </Container>
    )
}

const Main = styled.main`
    margin: 100px 20px 0 20px;
    display: flex;
    justify-content: space-between;
`;
const Lefter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;
const Righter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;
const Title = styled.h2`
    margin: 10px 0;
`;
const Paragraph = styled.p`
    max-width: 20vw;
`;


export default TaskDetail
