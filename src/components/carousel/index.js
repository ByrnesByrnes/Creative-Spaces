import React from 'react';
import {
    Container,
    Slide,
    Arrow,
    Control,
    Image,

} from './styles/carousel'



export default function Carousel({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Carousel.Slide = function CarouselSlide({children, ...restProps}) {
    return <Slide {...restProps}>{children}</Slide>
}

Carousel.Arrow = function CarouselArrow({children, ...restProps}) {
    return <Arrow {...restProps}>{children}</Arrow>
}

Carousel.Control = function CarouselControl({children, ...restProps}) {
    return <Control {...restProps}>{children}</Control>
}

Carousel.Image = function CarouselImage({...restProps}){
    return <Image {...restProps} />
}