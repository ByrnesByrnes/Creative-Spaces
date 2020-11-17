import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
export const Container = styled.section 
`
    padding-top: 100px;
`

export const Frame = styled.div
`
    display: flex;
    flex-direction: column;
    min-height: 400px;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 40px 40px;
    margin-bottom: 50px;
    border-radius: 12px;
    border: 1px solid rgb(176, 176, 176);

    @media (max-width: 550px) {
        width: 70%;
    }
`

export const Base = styled.div
`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`
export const Input = styled.input
`   
    box-sizing: border-box;
    height: 60px;
    font-size: 1.2rem;
    padding: 5px 20px;
    border: 1px solid rgb(176, 176, 176);
    border-bottom: none;
    

    
    &:focus {
        border: 2px solid black;
        outline: none;
    }

    &:first-of-type {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    
    &:last-of-type {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border-bottom: 1px solid rgb(176, 176, 176);

        &:focus {
            border-bottom: 2px solid black;
        }
       
    }
`
export const Title = styled.h1
`
    min-height: 64px;
    text-align: center;
    margin: 0;
    
`

export const Submit = styled.button
`
    background-color: #FF385C;
    color: white;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding: 16px 0;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 30px;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

`

export const Text = styled.p
`
    font-size: 16px;
    font-weight: 500px;
    color: #484848;
    line-height: 1.43;
`
export const TextSmall = styled.p
`

`

export const Error = styled.div
`   
    display: flex;
    align-items: center;
    color: rgb(193, 53, 21);
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 0 20px;
    transition: 0.2s ease-in-out;
    padding: 0;

    svg {
        font-size: 1.5rem;
        margin-right: 5px;
    }
`

export const Link = styled(RouterLink)
`
    color: rgb(34, 34, 34);
    font-weight: 600;
    margin-left: 10px;

    &:Hover {
        color: rgb(0,0,0);
    }
`