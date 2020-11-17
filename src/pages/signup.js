import React, { useState, useContext } from "react";
import {RiErrorWarningLine} from 'react-icons/ri'
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from "../context/firebase";

import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";


export default function Signup() {
    const history = useHistory()

    const { firebase } = useContext(FirebaseContext)
    console.log(firebase)
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const isInvalid =
        (password === "") | (emailAddress === "") | (password2 === "");

    const handleSignup = (event) => {

        event.preventDefault();
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(( result ) => 
                result.user
                .updateProfile({
                    displayName: firstName,

                })
                .then(() => {
                    setEmailAddress('')
                    setFirstName('')
                    setPassword('')
                    setPassword('')
                    setError('')
                    history.push(ROUTES.BROWSE)
                })
            ).catch(err => setError(err.message))
    };

    return (
        <>
            <HeaderContainer />
            <Form>
                <Form.Frame>
                    <Form.Title>Sign Up</Form.Title>

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
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
                        {error && (
                            <Form.Error>
                                <RiErrorWarningLine />
                                {error}
                            </Form.Error>
                        )}
                        <Form.Submit type="submit" disabled={isInvalid}>
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already have an account?
                        <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
                        </Form.Text>
                    </Form.Base>
                </Form.Frame>
            </Form>
            <FooterContainer />
        </>
    );
}
