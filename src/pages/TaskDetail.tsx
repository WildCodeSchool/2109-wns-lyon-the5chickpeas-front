import React from 'react';
import styled from 'styled-components';
import { Container } from './styles';
import HeadBar from '../components/HeadBar';

function TaskDetail({color, buttontext}: {color?: string, buttontext?: string}) {
    return (
        <Container >
            <HeadBar />
            <Main >
                <div className="detailBox">
                    {/* SECTION : Left*/}
                    <div className="dBox">   
                        toto
                    </div>

                    {/* SECTION : Right*/}
                    <div className="dBox">
                        yes ça rends crazy le distanciel
                    </div>
                </div>
            </Main>      
        </Container>
    )
}

const Main = styled.main`
    margin-top: 80px;
`;

const dBox = styled.div`
    height: 100vh;
`;

const detailBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default TaskDetail
