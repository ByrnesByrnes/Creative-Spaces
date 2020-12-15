import styled from 'styled-components'

export const Container = styled.section 
`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
`

export const Group = styled.div 
`   
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    &.card-item {
        width: 50%; 
        @media (max-width: 600px) {
            width: 100%;
        }
    }

    &.card-info {
        flex-direction: column;
    }

    &.align { 
        align-items: center;
        svg {
            
            margin: 0;
        }
    }

    &.title {
        justify-content: space-between;
        width: 95%;
        margin: 0 auto;
    }

    .rating {
        color: #FF385C;
        margin: 0 5px 10px 0;

    }
`

export const Title = styled.h1 
`

`

export const Image = styled.div 
`   
    height: 100%;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgb(221,221,221);
   
`
export const SubTitle = styled.h2 
`
    margin: 0;
    padding: 0;
    
`

export const Text = styled.p 
`
    margin: 0;

    &.reviews {
        color: rgb(113, 113, 113);;
    }
`

export const Item = styled.div 
`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    letter-spacing: .2px;
    width: 100%;
    margin: 0 10px;
    border-radius: 12px;
    cursor: pointer;
    line-height: 1.43;
    
    > ${Group} {
        padding: 15px;
    }


`

// RightSide
export const Display = styled.div 
`
`