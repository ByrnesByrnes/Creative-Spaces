import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

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

export const ButtonLink = styled(RouterLink)
`
    text-decoration: none;
    color: rgb(34, 34, 34);
    padding: 12px;
    display: flex;
    align-items: center;

    svg {
        font-size: 1.4rem;
    }
    &:hover {
        background-color: rgb(247,247,247);
        border-radius: 20px;
    }
`

export const Title = styled.h2
`
    color:  #FF385C;
    display: inline-block;
`

export const Search = styled.div 
`

`

export const SearchInput = styled.input 
`

`