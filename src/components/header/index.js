import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import { 
    Container, 
    Frame, 
    Logo, 
    Link, 
    ButtonLink, 
    Title, 
    Group, 
    Search, 
    SearchInput, 
    Profile,
    Dropdown,
    TextLink,
    Break,
} from './styles/header'




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
    return (<ButtonLink {...restProps}>{children}</ButtonLink>)
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}


// Search Bar
Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps} active={searchActive}>
            <SearchInput
                type="text"
                placeholder="Start your search"
                active={searchActive} 
                value={searchTerm} 
                onChange={({ target }) => setSearchTerm(target.value)}
            />
            <FaSearch onClick={() => setSearchActive(!searchActive)}/>
        </Search>
    )
}

// ProfileDropDown
Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({children,...restProps}) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Break = function HeaderBreak({ ...restProps}) {
    return <Break {...restProps}/>
}


