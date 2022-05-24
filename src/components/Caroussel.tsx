import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Chip } from './Chip';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Text } from './TOTW';


const StyledCaroussel = styled.div`
    min-width: 75%;
    margin: 3rem auto 5em auto;
`;
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

export const GET_TASKS = gql`
    query GetTasks {
        getTasks {
        subject
        description
        }
    }
`;
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export function Caroussel() {
    // hooks
    const { loading, error, data } = useQuery(GET_TASKS);
    const [tasks, setTasks] = useState([]);

    // standard functions
    const onInitialized = (e: { item: any; }) => {
        console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
    };
    
    const onSlideChange = (e: { item: any; }) => {
        console.debug(`Item's position before a change: ${e.item}. Event:`, e);
    };
    
    const onSlideChanged = (e: { item: any; }) => {
        console.debug(`Item's position after changes: ${e.item}. Event:`, e);
    };
    
    const onResized = (e: { item: any; }) => {
        console.debug(`Item's position after resize: ${e.item}. Event:`, e);
    };

    // useEffect
    useEffect(() => {
        ;(async() => {
            try{
                const tasksData = await data.getTasks;
                if (tasksData) {
                    setTasks(tasksData)
                }
                console.log(tasksData);
                
            } catch(e) {
                console.log(e);
            }
        })
    ()},[data])
    

    return (
    <div>
        <Container>
        <AliceCarousel
            mouseTracking
            keyboardNavigation
            responsive={responsive}
            onInitialized={onInitialized}
            onSlideChange={onSlideChange}
            onSlideChanged={onSlideChanged}
            onResized={onResized}
        >
            {tasks?.map((task: any) => 
            <StyledTaskCard key={task.id}>
                <FlexSpaceBetween>
                {task.subject} 
                </FlexSpaceBetween>
                <Text fontSize='medium' margin='1.5rem 0;'>
                    {task.description}
                </Text>
                <div className='flex-custom'>
                    <Chip background={'blue'}>
                        {task.subject}
                    </Chip>
                </div>
            </StyledTaskCard>)}
        </AliceCarousel>
    </Container>
</div>
    )
}
export const Container = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 0%;
    width: auto;
    opacity: 0;
    font-size: 10px;
    height: 80%;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.2s ease;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
      opacity: 1;
    }
  }
  .alice-carousel__next-btn {
    right: 0;
  }
  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    border: 1px solid white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gainsboro;
    height: 20px;
    width: 20px;
    color: black;
  }
  .alice-carousel__prev-btn span,
  .alice-carousel__next-btn span {
    &:hover {
      color: black;
    }
  }
`;