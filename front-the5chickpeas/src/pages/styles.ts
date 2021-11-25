import styled from "styled-components";
//import Ellipse from '../images/Ellipse1'

export const Container = styled.div`
    margin: 0 1rem;
    background-color: #FFF;

`;

export const ContainerLogin = styled(Container)`
    background-image: url('../images/Ellipse1');
    
`;

// -------------- Base btn ----------------
export const Btn = styled.button`
    margin-right: 1rem;
    padding: .8rem 2rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

export const BtnWhite = styled(Btn)`
    color: #000;
    background-color: #FFF;
    &:hover {
        color: #FABB18;
    }
`;

export const BtnYellow = styled(Btn)`
    color: #000;
    background-color: #FABB18;
    &:hover {
        color: #FABB18;
    }
`;

export const BtnBlack = styled(Btn)`
    color: #FFF;
    background-color: #000;
    &:hover {
        color: #FABB18;
    }
`;