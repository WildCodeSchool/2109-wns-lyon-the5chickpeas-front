import React from 'react';
// styles
import { Container } from './styles';
import styled from 'styled-components';
// img
import logo from '../images/Logo.svg';
import view from '../images/view.png';
// components
import HeadBar from './../components/HeadBar';
import ButtonBlack from '../components/ButtonBlack';

function Homepage() {
    return (
        <>
            <Container>
                <HeadBar />
                <MainStyled>
                    <h1>More than a job. It's a way of working together</h1>
                    <ContentStyled>
                        <LeftBoxStyled>
                            <h2>Collaborate, manage projects and reach new heights in productivity with <span>WildMine</span>.</h2>
                            <div>
                                <h2>Developed by</h2>
                                <img src={logo} alt="5 chickpeas" />
                            </div>
                        </LeftBoxStyled>
                        <ViewStyled src={view} alt="Wildmine view" />
                    </ContentStyled>
                    <ButtonBlack value="Start now !" />
                </MainStyled>
            </Container>
        </>
    )
}

const ContentStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MainStyled = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
`;

const LeftBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 35vw;
    height: 100%;
    margin: 0 1rem;
`;

const ViewStyled = styled.img`
    max-width: 800px;
`;

export default Homepage;
