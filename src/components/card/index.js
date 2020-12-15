import React from 'react'
import { 
    Container,
    Title,
    Group,
    Image,
    Text,
    SubTitle, 
    Item,
    Display
} from './styles/card'


export default function Card({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}


Card.Container = function CardContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Card.SubTitle = function CardSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Card.Group = function CardGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
Card.Image = function CardImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Card.Display = function Card({children, ...restProps}) {
    return <Display {...restProps}>{children}</Display>
}



   
  // add rating system after  <Card.Rating></Card.Rating>
   
