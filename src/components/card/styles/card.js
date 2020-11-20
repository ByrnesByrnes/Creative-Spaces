import styled from 'styled-components'





export const Container = styled.section 
`
    width: 90%;
    margin: auto;
    margin-top: 100px;

  
`

export const Group = styled.div 
`   
    width: 100%;
    position: relative;

    &.rating-price {
        position: absolute;
        bottom: 0;
        
    }
`

export const Title = styled.h1 
`
  
`

export const Image = styled.img 
`   
    height: 100%;
    width: 300px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
`
export const SubTitle = styled.h2 
`
   
    
`

export const Text = styled.p 
`
    margin: 0;

    ~ ${Group} {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 16px;

        .price {
            margin-right: 30px;
        }
    }
`

export const Item = styled.div 
`
    display: flex;
    margin: 15px 0;
    height: 230px;
    border-radius: 12px;
    box-shadow: 5px 1px 10px rgba(0,0,0, 0.2);
    cursor: pointer;
    
    > ${Group} {
        padding: 15px;
    }


`

// RightSide
export const Display = styled.div 
`
    width: 1000px;
`