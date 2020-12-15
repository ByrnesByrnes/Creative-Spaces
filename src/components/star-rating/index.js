import React from 'react';
import { Container } from './styles/star-rating'

export default function StarRating({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

