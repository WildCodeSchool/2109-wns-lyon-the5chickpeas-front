import React from 'react';
import PropTypes from "prop-types";
import styled, {css} from 'styled-components';
import { DateTime } from './DateTime';
import { Text } from './TOTW';

const StyledBoxNotification = styled.div`
    margin: .5rem 0;
    background-color: orange;
    border-radius: 35px;
    width: 25rem;
    heigth: 15rem;
    padding: 1rem 2rem;
    text-align: left;
`;
export function BoxNotification({children, date, time, notification, notificatedBy} : {children?:any, date?: string, time?: string, notification?: string, notificatedBy?: string}){
    return(
        <>
            <StyledBoxNotification>
                <DateTime date={''} time={''} ></DateTime>
                <Text fontSize='small' margin='1rem 0;'>
                    {notification}
                </Text>
                <Text fontWeight='bold' fontSize='small'>
                    {notificatedBy}
                </Text>
            </StyledBoxNotification> 
        </>
    )
}