import React from 'react';

import { 
    Container ,
    Title,
    SubTitle,
    Text,
    Link,
    Group
} from './styles/profile'

export default function Profile({children, ...restProps}) {
     return <Container {...restProps}>{children}</Container>
}

Profile.Title = function ProfileTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Profile.SubTitle = function ProfileSubTitle({ children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Profile.Text = function ProfileText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Profile.Link = function ProfileLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Profile.Group = function ProfileGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}