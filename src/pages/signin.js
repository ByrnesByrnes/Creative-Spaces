import React, { useState } from 'react'
import { HeaderContainer } from '../containers/header'

import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import {RiErrorWarningLine} from 'react-icons/ri'

import * as ROUTES from '../constants/routes'

export default function Signin() {
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    const isInvalid = password === '' | emailAddress === '' | password2 === ''
    

    const handleSignin = (event) => {
        event.preventDefault()
        isValid
       
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
                        <Form.Input
                            type="password"
                            placeholder="Retype Password"
                            autoComplete="off"
                            value={password2}
                            onChange={({ target }) => setPassword2(target.value)}
                        />
                        {error && <Form.Error><RiErrorWarningLine/> {error}</Form.Error>}
                        <Form.Submit 
                            type="Submit"
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