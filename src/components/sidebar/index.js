import React from 'react';
import { FaCheck } from 'react-icons/fa'
import { 
    Container,
    Image,
    Text,
    SubTitle,
    Group,
    Name
} from './styles/sidebar'


export default function SideBar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SideBar.Image = function SideBarImage({...restProps}) {
    return <Image {...restProps}/>
}

SideBar.SubTitle = function SideBarSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
SideBar.Text = function SideBarText({children,...restProps}) {
    return (
        <Text {...restProps}>
            <FaCheck />{children}
        </Text>
    )
}

SideBar.Group = function SideBarGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
SideBar.Name = function SideBarName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}
