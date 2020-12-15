import React from 'react';
import { Jumbotron, OptForm } from '../components';
import * as ROUTES from '../constants/routes'
export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            <Jumbotron>
            <Jumbotron.Pane>
                <Jumbotron.Title>Creative Spaces</Jumbotron.Title>
                <Jumbotron.SubTitle>Have a space? Rent Your Space Out Today!</Jumbotron.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Become a Host</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Looking for a Space to rent instead? add another button</OptForm.Text>
                </OptForm>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
                <Jumbotron.Image src="images/jeep-main-img.jpg" alt="jeep grey scale" />
            </Jumbotron.Pane>
            </Jumbotron>
        </Jumbotron.Container>
    )
}