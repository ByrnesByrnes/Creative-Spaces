import styled from 'styled-components'
import { NavLink as NavLink, Link as RouterLink } from 'react-router-dom'

export const Container = styled.div
` 
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    height: 80px;
    background-color: white;
    box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);
`

export const Frame = styled.div
`
    display: flex;
    max-width: 1400px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0 80px;

    @media (max-width: 600px) {
        padding: 0 10px;
    }
`

export const Group = styled.div 
`
    display: flex;
    align-Items: center;
`

export const Logo = styled.div
`   
    margin: 0;
    padding 0;
    height: 32px;

    svg {
        height: 100%;
        font-size: 2.5em;
        fill: #FF385C;
    }

    @media (max-width: 600px) {
        height: 20px;
    }
`


export const Link = styled.p
`
    color: rgb(34, 34, 34);
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => active ? "700" : "normal" }

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

export const ButtonLink = styled(NavLink)
`
    text-decoration: none;
    color: rgb(34, 34, 34);
    padding: 12px;
    display: flex;
    align-items: center;
    transition: .3s ease-in-out;

    &.active {
        font-weight: bold;
    }

    svg {
        font-size: 1.4rem;
    }
    &:hover {
        background-color: rgb(247,247,247);
        border-radius: 20px;
    }

    
    @media (max-width: 700px) {
        margin: 0;
        width: 60px;

        &:nth-of-type(2) {
            display: none;
        }
        &:nth-of-type(3) {
            display: none;
        }
    }
`

export const Title = styled.h2
`
    color:  #FF385C;
    display: inline-block;

    @media (max-width: 600px) {
        font-size: 1.1rem;
        max-width: 70px;
    }
`

export const Search = styled.div 
`
    display:flex;
    align-items: center;
    border: 1px solid rgb(176, 176, 176);
    border-radius: 50px;
    padding: 6px;
    transition: 0.3s ease-in-out;
    box-shadow: ${({ active }) => active ? '5px 1px 10px rgba(0,0,0, 0.2);': ''};

    @media (max-width: 700px) {
        display:none;
    }

    & svg {
        font-size: 14px;
        color: white;
        height:15px;
        width: 15px;
        background-color:#FF385C;
        padding: 9px;
        border-radius: 50%;
        cursor: pointer;
    }

    &:hover {
        box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);
    }

`

export const SearchInput = styled.input 
`
    border: none;
    font-size: 15px;
    color: rgb(0,0,0);
    outline: none;
    transition: 0.3s ease-in-out;
    padding: 2px 0;
    opacity: ${({ active })=> active ? '1' : '0'};
    width: ${({ active }) => active ? '180px' : '0'};
    margin-left: ${({ active }) => active ? '10px' : '0'};
    margin-right: ${({ active }) => active ? '10px' : '0'};
`

//Profile
export const Profile = styled.div
`
    
    border: 1px solid rgb(221, 221, 221);
    border-radius: 50px;
    margin: 0;
    padding: 5px;
    cursor: pointer;
    align-items: center;
    height: 40px;
    width: 80px;
    transition: 0.3s ease-in-out;

    svg {
        padding: 0 5px;
        color: rgb(34,34,34);
        height: 20px;
        width: 30px;
        margin: 0;
    }

    svg:last-of-type {
        color: rgb(113,113,113);
        height: 40px;
    }

    &:hover {
        box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);
    }
`

export const Dropdown = styled.div 
`
    background-color: #fff;
    box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);
    width: 240px;
    border-radius:12px;
    transform: translate(-150px,15px);
    transition: .3s ease-in-out;
    display: none;

    &.active {
        display: block;
        
    }

    & ${Group}:first-of-type {
        padding-top: 10px;
    }
    & ${Group}:last-of-type {
        padding-bottom: 10px;
    }
`

export const TextLink = styled(RouterLink)
`   
    text-decoration: none;
    color: inherit;
    padding: 10px 20px;
    font-size: 14px;
    width: 100%;
    position: relative;
    transition: .1s ease-in-out;

    &:hover {
        background-color: rgb(240,240,240);
    }

`

export const Break = styled.div
`
    flex-basis: 100%;
    height: 0;
    margin: 8px 0;
    border-bottom: 1px solid rgb(230, 230, 230);
`