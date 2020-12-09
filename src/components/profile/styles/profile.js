import styled from 'styled-components'
import { Link as RouterLink} from 'react-router-dom'

export const Container = styled.section 
`

`



export const SubTitle = styled.h2 
`

`

export const Text = styled.p
`
    > svg {
        margin-right: 10px;
    }
`
export const Title = styled.h1
`   
    font-size: 30px;
    margin: 0;
    

    ~ ${Text} {
        margin: 0;
        font-size: 14px;
        color: rgb(113,113,113);
        line-height: 18px;
        margin-bottom: 8px;
    }
`
export const Link = styled(RouterLink)
`

`
export const Group = styled.div
`
    padding: 20px 0;
    border-bottom: 1px solid rgb(221,221,221);
`