import styled from 'styled-components'

export const Container = styled.div 
`
    display: flex;
    position relative;
    width: 100%;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    marging: 0;
    padding: 0;
    align-items: center;
    border-radius: 12px;

`
export const Slide = styled.div 
`
    min-width: 100%;
    height: 100%;
    transition: 0.2s;

    overflow: hidden;
`
export const Control = styled.div 
`
    position: absolute;
    display: flex;

    width: 100%;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
`

export const Arrow = styled.button 
`   
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 0 10px;
    border: 1px solid rgba(0,0,0, 0.08);
    font-size: 20px;
    cursor: pointer;
    background-color: rgba(255,255,255, 0.9);
    transition: .2s ease-in-out;
    box-shadow: transparent 0px 0px 0px 1px,
                transparent 0px 0px 0px 4px,
                rgba(0,0,0, 0.18) 0px 2px 4px;

    &:hover {
        transform: scale(1.2);
    }
`

export const Image = styled.img 
`
    width: 100%;
    height: 100%;
    object-fit: cover;
`