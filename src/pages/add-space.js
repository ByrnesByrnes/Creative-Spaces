import React, {useState, useContext} from 'react'

import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

import { Form, Main } from '../components'

import { FirebaseContext } from '../context/firebase'

export default function AddSpace() {

    const { firebaseFirestore } = useContext(FirebaseContext)

    const [spaceName, setSpaceName] = useState('')
    const [description, setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [error, setError] = useState('')


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

                            <Form.Frame>
                                <Form.Title>Earn up to <span>$1,944 CAD</span> $1,944 CAD a month hosting in Mississauga</Form.Title>
                                <Form.Link>How we estimate your earning potential</Form.Link>
                            </Form.Frame>
                            <Form.Frame>
                                
                                <Form.Title>Add a Space</Form.Title>
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
               
            <FooterContainer />
        </>
    )
}