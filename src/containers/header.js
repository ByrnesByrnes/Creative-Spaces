import React, { useState, useContext } from 'react';
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FaFeatherAlt } from 'react-icons/fa'
import { FiGlobe } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FirebaseContext } from '../context/firebase'

// Add Rest of LINKs and PAGES


export function HeaderContainer({children}) {

    const { firebase } = useContext(FirebaseContext)

    const [searchTerm, setSearchTerm] = useState('')
    const [dropdown,setDropDown] = useState(false)

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
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </Header.Group>
                <Header.Group>
                    <Header.ButtonLink to={ROUTES.BROWSE}>Browse Spaces</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Rent your Space</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>
                        <FiGlobe />
                        <MdKeyboardArrowDown />
                    </Header.ButtonLink>
                    <Header.Profile>
                        <Header.Group  onClick={() => setDropDown(!dropdown)}>
                            <GiHamburgerMenu />
                            <CgProfile />
                        </Header.Group>
                        <Header.Dropdown className={dropdown ? 'active' : '' }>
                        <Header.Group>
                            <Header.TextLink to={ROUTES.SIGN_UP} style={{"fontWeight": "bold"}}>Sign Up</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to={ROUTES.SIGN_IN}>Log In</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to={ROUTES.HOME} onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
                        </Header.Group>
                        <Header.Break />
                        <Header.Group>
                            <Header.TextLink>Host Your Space</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink>Help</Header.TextLink>
                        </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    )
}