import React, { useContext } from 'react'

//React Icons
import { AiFillStar } from 'react-icons/ai'
import { MdVerifiedUser, MdWork} from 'react-icons/md'
import { ImHome } from 'react-icons/im'
import { FaCommentAlt } from 'react-icons/fa'

//Sample Info Products
import { products } from '../sampleINFO'
import { selectionMap } from '../utils'

//Containers Components
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { BrowseContainer } from '../containers/browse'
import { SideBar, Profile } from '../components'
import { AuthUserContext } from '../context/authUser'

export default function UserProfile() {

    const { authUser } = useContext(AuthUserContext)
    const { user } = authUser()

    const filteredProducts  = selectionMap(products)
    let userSpaces = filteredProducts.products[2].data.map(spaces => spaces)
    console.log(filteredProducts.products[2].data.map(spaces => spaces))
  
    return (
        <>
            <HeaderContainer />

            <div className="main main-profile">
                <SideBar>
                    <SideBar.Image src="/images/girl.jpg" alt=""/>
                    <SideBar.Group>
                        <SideBar.SubTitle>
                        <AiFillStar />
                            320 Reviews
                        </SideBar.SubTitle>
                        <SideBar.SubTitle>
                            <MdVerifiedUser />
                            Identity verified
                        </SideBar.SubTitle>
                    </SideBar.Group>
                    <SideBar.Group>
                        <SideBar.Name>{user.displayName} confirmed</SideBar.Name>
                        <SideBar.Text>Identity</SideBar.Text>
                        <SideBar.Text>Email Address</SideBar.Text>
                        <SideBar.Text>Phone Number</SideBar.Text>
                        <SideBar.Text>Work email</SideBar.Text>
                    </SideBar.Group>
                </SideBar>
                <Profile>
                    <Profile.Title>Hi, I’m {user.displayName}</Profile.Title>
                        <Profile.Text>Joined in 2011</Profile.Text>
                    <Profile.Group>
                    <Profile.SubTitle>About</Profile.SubTitle>
                        <Profile.Text>
                            I gave up my finance career in 2010 to pursue a lifelong dream: to travel the world full time. 
                        </Profile.Text>
                        <Profile.Text>
                            To support myself, I rent out my apartments on Airbnb. It's been a great experience, so great that I… read more
                        </Profile.Text>
                        <Profile.Text><ImHome />Lives in Barcelona, Spain</Profile.Text>
                        <Profile.Text><FaCommentAlt />Speaks Deutsch, English, Español, Nederlands, Português</Profile.Text>
                        <Profile.Text><MdWork /> Work: Self employed</Profile.Text>
                    </Profile.Group>
                    <Profile.Group className="profileProducts">
                        <Profile.SubTitle>{user.displayName}'s listings</Profile.SubTitle>
                        <BrowseContainer products={userSpaces}/>
                    </Profile.Group>
                    <Profile.Group>
                        <Profile.SubTitle>
                            <AiFillStar/>
                            Reviews
                        </Profile.SubTitle>
                    </Profile.Group>
                </Profile>
                
            </div>
            <FooterContainer />
        </>
    )
}