import React from 'react';
import styled from 'styled-components';
import { Container } from './styles';
import HeadBar from '../components/HeadBar';
import { ButtonCustom } from '../components/Button';
import { Title } from '../components/Title';
import { TOTW } from '../components/TOTW';


function TaskDetail({color, buttontext}: {color?: string, buttontext?: string}) {
    
    const datas = [
        
        {
            dataDescription: 'Initial time spent',
            dataStats : 'No data.'
        },
        {
            dataDescription: 'Total time spent',
            dataStats : 'No data.'
        },
        {
            dataDescription: 'Percentage time spent',
            dataStats : 'No data.'
        }
    ];
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
                        yes
                    </div> ça rends crazy le distanciel
                </div>

                {/* SECTION : Time of the week
                <div className='centered'>
                    {datas.map((data) => (
                        <TOTW buttontext={data.dataStats} >
                            {data.dataDescription}
                        </TOTW>

                    ))} 
                </div>
                <ButtonCustom color={'black'} background={'orange'}>
                        {'< Back'}
                </ButtonCustom>*/}
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
