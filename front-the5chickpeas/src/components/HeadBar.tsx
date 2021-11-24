import React from 'react';
import styled from 'styled-components';
import logo from '../images/Logo.svg';
import Button from './ButtonWhite';
import { Link } from 'react-router-dom';

function HeadBar() {
    return (
        <HeadBarStyled>
            <div>
                <Link id="logo" to="/">
                    <img src={logo} alt="5 chickpeas"/>
                </Link>
                <span>WildMine</span>
            </div>
            <div>
                <Button value="Login"/>
                <Button value="Sign up"/>
            </div>
        </HeadBarStyled>
    )
};

const HeadBarStyled = styled.nav`
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

// const LogoStyled = styled.div`
//     cursor: pointer;
// `;

export default HeadBar;
