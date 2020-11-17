import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Container, Frame, Logo, Link, ButtonLink, Title, Group } from './styles/header'


export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <RouterLink to={to}>
            <Logo {...restProps} />
        </RouterLink>

    )
}

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Header.Link = function HeaderLink({children, ...restProps }) {
    return <Link>{children}</Link>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}