import React from 'react';
// styles
import { Container } from './styles';
// import styled from 'styled-components';
// img
import logo from '../images/Logo.svg';
import view from '../images/view.png';
// components
import HeadBar from './../components/HeadBar';

function Homepage() {
    return (
        <>
            <Container>
                <HeadBar />
                <h1>More than a job. It's a way of working together</h1>
                <div>
                    <div>
                        <h2>Collaborate, manage projects and reach new heights in productivity with WildMine.</h2>
                        <div>
                            <p>Developed by</p>
                            <img src={logo} alt="5 chickpeas" />
                        </div>
                    </div>
                    <img src={view} alt="Wildmine view" />
                </div>
                <button>Start now!</button>
            </Container>
        </>
    )
}

export default Homepage;
