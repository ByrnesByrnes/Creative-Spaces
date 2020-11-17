import React from 'react';
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FaFeatherAlt } from 'react-icons/fa'
import { FiGlobe } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'


export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo 
                        to={ROUTES.HOME} 
                        alt="Create Spaces">
                        <FaFeatherAlt />
                    </Header.Logo>
                    <Header.Title>Creative Spaces</Header.Title>
                </Header.Group>
                <Header.Group>
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Rent your Space</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>
                        <FiGlobe />
                        <MdKeyboardArrowDown />
                    </Header.ButtonLink>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    )
}