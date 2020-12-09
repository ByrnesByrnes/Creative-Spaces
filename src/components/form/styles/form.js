import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
export const Container = styled.section 
`
    padding-top: 100px;
`
    
export const Base = styled.form
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
    
    transition: 0.3s ease-in-out;

    &:focus {
        border: 2px solid rgb(0, 0, 0);
        outline: none;
    }

    &:invalid {
        box-shadow: none;
        border:1px solid rgb(193, 53, 21);
        background-color: rgba(193, 53, 21,0.07);
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
    text-align: inherit;
    margin: 0;
    
`

export const Submit = styled.button
`   
    box-sizing: border-box;
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
    
    transition: .3s ease-in-out;

    &:focus {
        outline: solid black 2px;
        -moz-outline-radius: 13px;
    }

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
    margin: 10px 0 0 20px;
    transition: 0.2s ease-in-out;
    padding: 0;

    svg {
        font-size: 1.5rem;
        width: 55px;
        margin-right: 5px;
    }
`

export const Link = styled(RouterLink)
`
    color: rgb(34, 34, 34);
    font-weight: 600;
    margin-left: 10px;

    &:hover {
        color: rgb(0,0,0);
    }
`

export const Frame = styled.div
`
    display: flex;
    flex-direction: column;
    min-height: 350px;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 40px 40px;
    margin-bottom: 50px;
    border-radius: 12px;
    border: 1px solid rgb(176, 176, 176);
    background-color: #fff;
    text-align: center;
    
    &.first-frame {
        &:first-of-type {
            font-size: 1.3rem;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            border-right: 0px;
            border: none;
            border-right: 1px solid rgb(230, 230, 230);
            text-align: left;
            height: 350px;
            box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);

            ${Link} {
                margin: 30px 0;
                font-size: 14px;
                color: #484848;
                font-weight: 500;

                &:hover {
                    color: rgba(0,0,0);
                }
            }

        }
    }
    
    & ~ & {
        &:last-of-type {
            
            border: none;
            border-top-left-radius: 0px;

            border-bottom-left-radius: 0px;
            box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);
            max-height: 350px;
        }
    }
    
    span {
        color: #FF385C;
    }

    @media (max-width: 550px) {
        width: 70%;
    }
`