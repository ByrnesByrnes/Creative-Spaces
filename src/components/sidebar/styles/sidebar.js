import styled from 'styled-components'

export const Container = styled.div
`
    max-width: 310px;
    width: 300px;
    border: 1px solid rgb(221,221,211);
    padding: 24px;
    border-radius: 12px;

    svg {
        margin-right: 10px;
        align-items: center;
    }

`
export const Name = styled.h3
`

`
export const SubTitle = styled.h4
`
    display: flex;
    align-items: center;
    font-weight: regular;
    
    svg {
        font-size: 30px;
    }
`
export const Text = styled.p
`

`

export const Image = styled.img 
`
    width: 128px;
    height: 128px;
    object-fit: cover;
    display: block;
    margin: auto;
    vertical-align: bottom;
    border-radius: 50%;
`

export const Group = styled.div
`   
    padding: 10px 0;
    &:last-of-type {
        border-top: 1px solid rgb(221,221,221);
    }
`