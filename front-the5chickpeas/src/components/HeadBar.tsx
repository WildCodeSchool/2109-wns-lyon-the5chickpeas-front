import React from 'react';
import styled from 'styled-components';
// images
import logo from '../images/Logo.svg';
import profile from '../images/profile.png';
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
                {/* ? if user is log in show profile */}
                {/* get user's photo */}
                {/* get user's name */}
                {/* ? get user's notification */}
                {/* ? log out link */}
                <ProfileStyled src={profile} alt="profile" />
                {/* LINK LOG OUT ? */}
                <h3>Welcome User</h3>
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
    padding: 0 2rem;
    font-size: 1.5em;
    color: "#000";
    background-color: #FABB18;
    width: 100%;
    height: 80px;
    img{
        max-height: calc(80px - 2rem);
        margin-right: 1rem;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

const ProfileStyled = styled.img`
    border-radius: 50%;
    max-width: 50px;
`;

export default HeadBar;
