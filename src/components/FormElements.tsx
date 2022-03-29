import styled from "styled-components";

export const Form = styled.form`
    height: auto;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin: auto;
`;

export const Input = styled.input`
    position: relative;
    width: 539px;
    height: 80px;
    margin: 30px;
    padding: 0 10px;
    font-size: 25px;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    

`;

export const ButtonSignUp = styled.button`
    width: 200px;
    height: 50px;
    margin: 20px;
    color: black;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: #FABB18;

    &:hover {
        cursor: pointer;
        background-color: black;
        color: #FABB18;
    }
`

export const Case = styled.input`
    position: relative;
    width: 20px;
    height: 20px;
    margin: 10px;
    padding: 0 10px;
    font-size: 30px;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    

`;