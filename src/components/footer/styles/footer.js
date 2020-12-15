import styled from 'styled-components'

export const Container = styled.div
`
    border-top: 1px solid rgb(221, 221, 221);
    background-color: rgb(247,247,247);
    padding: 50px 56px;
    margin: auto;
`

export const Column = styled.div
`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Row = styled.div
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;
    max-width: 1200px;
    margin: auto;
`

export const Link = styled.a
`
    color: #343434;
    margin-bottom: 16px;
    font-size: 14px;
    text-decoration: none;
    line-height: 18px;

    &:hover {
        text-decoration: underline;
        color: #606060;
    }
    `
    
export const Title = styled.p
`
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 14px;
    font-weight: bold;
`

export const Text = styled.p
`
    color: #343434;
    
    > a {
        padding-left: 15px;
    }

`

export const Break = styled.div
`
    flex-basis: 100%;
    height: 0;
`

