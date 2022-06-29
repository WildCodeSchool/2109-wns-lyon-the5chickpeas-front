import styled from "styled-components";
//import Ellipse from '../images/Ellipse1'

export const Container = styled.div`
  margin: 0 1rem;
  background-color: #fff;
`;

export const ContainerLogin = styled(Container)`
  background-image: url("../images/Ellipse1");
`;

export const BordedContainer = styled.div`
  margin: 2rem 1rem 3rem 10rem;
  background-color: #fff;
  border-radius: 25px;
  height: 900px;
  border: 2px solid black;
  margin-left: 200px;
  margin-right: 20px;
`;

// -------------- Base btn ----------------
export const Btn = styled.button`
  margin-right: 1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const BtnWhite = styled(Btn)`
  color: #000;
  background-color: #fff;
  &:hover {
    color: #fabb18;
  }
`;

export const BtnYellow = styled(Btn)`
  color: #000;
  background-color: #fabb18;
  &:hover {
    color: #fabb18;
  }
`;

export const BtnBlack = styled(Btn)`
  color: #fff;
  background-color: #000;
  &:hover {
    color: #fabb18;
  }
`;
