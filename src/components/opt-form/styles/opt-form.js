import styled from 'styled-components'

export const Container = styled.div
`
    display: flex;
    margin-top: 20px;
    height: 100%;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        justify-content: center;
    }
`

export const Input = styled.input
`
    max-width: 450px;
    width: 40%;
    color: rgb(34,34,34);
    border: 1px solid black;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 10px;
    height: 30px;
    box-sizing: border-box;
    font-size: 14px;

    &:hover {
        background-color: rgb(221,221,221);
    }

    @media (min-width: 1000px) {
        width: 50%;
    }
`

export const Button = styled.button
`
    display: flex;
    align-items: center;
    height: 30px;
    background: #FF385C;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    text-transform: uppercase;
    padding: 0 16px;
    font-size: 15px;
    border: 0;
    cursor: pointer;
    
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const Text = styled.p
`

`

export const Break = styled.div
`
    flex-basis: 100%;
    height: 0;
`