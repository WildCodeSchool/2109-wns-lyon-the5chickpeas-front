import React from 'react';
// styles
import styled from 'styled-components';
import { Container } from './styles';
// components
import HeadBar from '../components/HeadBar';
import SideBar from '../components/SideBar';
import { TOTW } from '../components/TOTW';
import { BoxNotification } from '../components/BoxNotification';
import { Caroussel } from '../components/Caroussel';
import { Title } from '../components/Title';

function Dashboard() {
    const notifications: any[] = [];

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
        },
        {
            dataDescription: 'Time left',
            dataStats : 'No data.'
        },
        {
            dataDescription: 'Total time spent',
            dataStats : 'No data.'
        }
    ];

    return (
        <Container >
            <HeadBar />
            <Main >
                <SideBar />
                
                <div className='bordered'>
                    {/* SECTION : Caroussel*/}
                    <div className='centered'>
                        <Title titletext='High priority'>
                        </Title>
                        {/* <Caroussel priorTasks={priorTasks} /> */}
                        <Caroussel />
                    </div>

                    <div className='flex-custom'>
                        {/* SECTION : Time of the week*/}
                        <div className='centered'>
                            <Title titletext='Time of the week'>
                            </Title>
                            {datas.map((data) => (
                                <TOTW buttontext={data.dataStats} >
                                    {data.dataDescription}
                                </TOTW>
                            ))} 
                        </div>
                        
                        {/* SECTION : Last notifications*/}
                        <div className='centered'>
                            <Title titletext='Last notifications'>
                            </Title>
                            {notifications.length > 0  ?
                                notifications.map((notification) => (
                                    <BoxNotification date={notification.date} time={notification.time} notification={notification.notification} notificatedBy={notification.notificatedBy}>
                                    </BoxNotification>
                                ))
                            : <BoxNotification notification={'No notifications.'}></BoxNotification>}
                        </div>
                    </div>
                </div>
            </Main>      
        </Container>
    )
}

const Main = styled.main`
    margin-top: 80px;
`;

export default Dashboard
