import {useContext} from 'react'
import { AuthUserContext } from "../context/authUser"


// filter by feature
export default function selectionMap( products ) {

    const { authUser } = useContext(AuthUserContext)
    const { user } = authUser()

    return {
        products: [
            {title: 'Featured', data: products.filter( item => item.featured === true )},
            {title: 'Regular', data: products.filter( item => item.featured !== true)},
            {title: 'UserSpaces', data: products.filter( item => item.userId === user.uid)},
            {title: 'TestUserSpaces', data: products.filter( item => item.userId === item.userId)}
        ]
    }
}

//specific email can work