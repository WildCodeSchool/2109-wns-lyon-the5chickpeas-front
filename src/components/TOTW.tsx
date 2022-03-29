import React from 'react';
import PropTypes from "prop-types";
import styled, {css} from 'styled-components';
import { ButtonCustom } from './Button';

const DetailWeekTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25rem;
    margin: 2rem 0;
`;

export const Text = styled.p<{textcolor?: string, fontSize?: string, fontWeight?: string, margin?: string}>`
    color: black;
    font-size: x-large;
    margin: auto 0;
    ${(props) => props.textcolor && css`color: ${props.textcolor};`}
    ${(props) => props.fontSize && css`font-size: ${props.fontSize};`}
    ${(props) => props.fontWeight && css`font-weight: ${props.fontWeight};`}
    ${(props) => props.margin && css`margin: ${props.margin};`}
`;

export function TOTW({children, buttontext, color, textcolor}:{children?: any, buttontext?: any, color?: any, textcolor?: any}){
    return(
        <>
            <DetailWeekTitleWrapper>
                <Text textcolor={textcolor}>
                    {children}
                </Text>
                <ButtonCustom color={color}>
                    {buttontext}
                </ButtonCustom>
            </DetailWeekTitleWrapper>
        </>
    )
}