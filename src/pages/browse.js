import React from 'react'

import { BrowseContainer } from '../containers/browse'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

export default function Browse() {

    return (
        <>
            <HeaderContainer />
            <BrowseContainer/>
            <FooterContainer />
        </>
    )
}