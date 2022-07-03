import React from 'react';
// styles
import { BtnBlack, Container } from './styles';
import styled from 'styled-components';
// img
import logo from '../images/Logo.svg';
import view from '../images/view.png';
// components
import { BtnWhite } from './styles';
// react router 
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <Container>
            <NavBarStyled>
                <div>
                    <Link id="logo" to="/">
                        <img src={logo} alt="5 chickpeas"/>
                    </Link>
                    <span>WildMind</span>
                </div>
                <div>
                    <Link to="/login">
                        <BtnWhite>Login</BtnWhite>
                    </Link>
                    <Link to="/signup">
                        <BtnWhite>Sign up</BtnWhite>
                    </Link>
                </div>
            </NavBarStyled>
            <MainStyled>
                <h1>More than a job. It's a way of working together</h1>
                <ContentStyled>
                    <LeftBoxStyled>
                        <h2>Collaborate, manage projects and reach new heights in productivity with <span>WildMind</span>.</h2>
                        <div>
                            <h2>Developed by</h2>
                            <img src={logo} alt="5 chickpeas" />
                        </div>
                    </LeftBoxStyled>
                    <ViewStyled src={view} alt="Wildmind view" />
                </ContentStyled>
                <Link to="/signup">
                    <BtnStartNow>Start now !</BtnStartNow>
                </Link>
            </MainStyled>
        </Container>
    )
}

const NavBarStyled = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    color: "#000";
    background-color: #FABB18;
    width: 100%;
    height: 80px;
    z-index: 9999;
    img{
        max-height: calc(80px - 2rem);
        margin: 1rem;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

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

const BtnStartNow = styled(BtnBlack)`
    margin: 1rem;
    padding: 1rem 3rem;
    border-radius: 30px;
    font-size: 1.2rem;
`;
export default Homepage;
