import React from 'react';
import styled from 'styled-components';
import { Chip } from '../components/Chip';
import { Text } from './TOTW';


const StyledTaskCard = styled.div`
    border-radius: 20px;
    background-color: seashell;
    padding: 1rem;
    display: block;
    margin: auto 1.5rem;
    
    min-height: 11rem;
`;

const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    p:first-child {
        font-weight: bold;
    }
`;
export function CarrouselTask({children, title, date, taskMessage, label1, label2, padding}:{children?: any, title?: string, date?: string, taskMessage?: string, label1?: string, label2?:string, padding?: string}){
    return(
            <StyledTaskCard>

                {/*Card Top*/}
                <FlexSpaceBetween>
                    <p>{title}</p>
                    <p>{date}</p>
                </FlexSpaceBetween>
                  

                {/*Card Middle*/}
                <Text fontSize='medium' margin='1.5rem 0;'>
                    {taskMessage}
                </Text>

                {/*Card Buttom*/}
                <div className='flex-custom'>
                        <Chip background={'blue'} padding={padding}>
                            {label1}
                        </Chip>
                        <Chip background={'green'} padding={padding}>
                            {label2}
                        </Chip>
                </div>
            </StyledTaskCard>
    )
}