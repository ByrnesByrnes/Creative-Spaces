import React from 'react'

import { BrowseContainer } from '../containers/browse'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { products } from '../sampleINFO'

export default function Browse() {

    return (
        <>
            <HeaderContainer />
            <BrowseContainer products={products}/>
            <FooterContainer />
        </>
    )
}