import React, {useState, useContext, useEffect} from 'react'
import {RiErrorWarningLine} from 'react-icons/ri'

import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

import { Form, ProgressBar } from '../components'

import { FirebaseContext } from '../context/firebase'
import { AuthUserContext } from "../context/authUser"

export default function AddSpace() {
    
    const { firebaseFirestore } = useContext(FirebaseContext)

    const { authUser } = useContext(AuthUserContext)
    const { user } = authUser()

    const [spaceName, setSpaceName] = useState('')
    const [description, setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [error, setError] = useState('')
    const [file, setFile] = useState(null)

    const imageTypes = ['image/jpeg', 'image/png']
    
    const formImage = (event) => {
        let selected = event.target.files[0]

        if (selected && imageTypes.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('error upload an image of jpeg/png')
        }

    }

    const handleAddSpace = (event) => {
        event.preventDefault()

        firebaseFirestore
            .collection('products')
            .add({
                name: spaceName,
                description: description,
                price: price,
                date: "",
                feature: false,
                userdId: user.uid
                
            }).then((docRef) => {
                setSpaceName('')
                setDescription('')
                setPrice('')
                setError('')
                console.log("Document written with ID: ", docRef.id);
            }).catch(err => setError(err.message))
    }

    return (
        <>
            <HeaderContainer />
                <div className="add-space">
                           
                    <div className="add-space__form">
                            <Form.Frame className="first-frame">
                                <Form.Title>Earn up to <span>$1,944 CAD</span> a month hosting in Mississauga</Form.Title>
                                <Form.Link>How we estimate your earning potential</Form.Link>
                            </Form.Frame>
                            <Form.Frame> 
                                <Form.Text>Tell us more about your space so lets get started</Form.Text>
                                <Form.Input
                                    type="file"
                                    onChange={formImage}
                                    
                                />
                                {file && <ProgressBar file={file} setFile={setFile} />}
                                <Form.Base onSubmit={handleAddSpace}>
                                <Form.Input
                                    type="text"
                                    placeholder="Name"
                                    autoComplete="off"
                                    value={spaceName}
                                    onChange={({ target }) => setSpaceName(target.value)}
                                />
                                <Form.Input
                                    type="text"
                                    placeholder="Tell us about the space"
                                    autoComplete="off"
                                    value={description}
                                    onChange={({ target }) => setDescription(target.value)}
                                />
                                
                                <Form.Input
                                    type="number"
                                    placeholder="Price"
                                    autoComplete="off"
                                    value={price}
                                    onChange={({ target }) => setPrice(target.value)}
                                />
                               

                                {error && <Form.Error><RiErrorWarningLine/>{error}</Form.Error>}
                                <Form.Submit type="submit">
                                    Start your Listing
                                </Form.Submit>
                                </Form.Base>
                            </Form.Frame>
                        
                    </div>
                </div>
                <div>
                    <div>
                    addd More info
                    </div>
                </div>
               
            <FooterContainer />
        </>
    )
}