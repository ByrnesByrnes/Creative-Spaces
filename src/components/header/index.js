import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Container, Frame, Logo, Link, ButtonLink, Title, Group, Search, SearchInput } from './styles/header'
import { FaSearch } from 'react-icons/fa'

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

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps}>
            <SearchInput active={searchActive} value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)}/>
            <FaSearch  onClick={() => setSearchActive(!searchActive)}/>
        </Search>
    )
}