import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext} from '../context/firebase'

import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import {RiErrorWarningLine} from 'react-icons/ri'

import * as ROUTES from '../constants/routes'

export default function Signin() {
    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' | emailAddress === ''

    const handleSignin = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('')
                setPassword('')
                setError('')
                history.push(ROUTES.BROWSE)
            }).catch((error) => setError(error.message))
    }

    return (
        <>
            <HeaderContainer />
                <Form>
                    <Form.Frame>
                    <Form.Title>Log In</Form.Title>

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                     
                        {error && <Form.Error><RiErrorWarningLine/>{error}</Form.Error>}
                        <Form.Submit 
                            type="submit"
                            disabled={isInvalid}
                        >
                        Sign In
                        </Form.Submit>
                        <Form.Text>
                            Don't have an account?
                            <Form.Link to={ROUTES.SIGN_UP}>Sign up</Form.Link>
                        </Form.Text>
                        
                    </Form.Base>
                    </Form.Frame>
                </Form>
            <FooterContainer />
        </>
    )
}