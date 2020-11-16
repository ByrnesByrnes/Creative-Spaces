import React from 'react';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            <Jumbotron>
            <Jumbotron.Pane>
                <Jumbotron.Title>Creative Spaces</Jumbotron.Title>
                <Jumbotron.SubTitle>Have a space? Rent Your Space Out Today!</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
                <Jumbotron.Image src="images/jeep-main-img.jpg" alt="jeep grey scale" />
            </Jumbotron.Pane>
            </Jumbotron>
        </Jumbotron.Container>
    )
}