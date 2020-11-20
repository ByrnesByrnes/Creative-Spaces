import React, { useState } from "react";

import { useContent } from "../hooks";
import { Card } from "../components";

import { selectionMap } from "../utils";

export function BrowseContainer() {
    //const { products } = useContent('products')

    //console.log(products)
    //const producstFilter = selectionMap(products)

    //console.log(producstFilter)
    const products = [
        // add in a location
        {
            date: "",
            description: "workout here if you wantdfs",
            docId: "1ffgyLszRlcRnmqvMAjd",
            featured: true,
            name: "garages",
            price: "159",
            img: "/images/garage.jpg",
        },
        {
            date: "",
            description: "sadfasdfasdfasdff",
            docId: "1ffgyLszRlcRnmqvMAj2",
            featured: true,
            name: "house",
            price: "99",
            img: "/images/house.jpg",
        },
        {
            date: "",
            description: "sadfasdfasdfasdfl",
            docId: "1ffgyLszRlcRnmqvMAj5",
            featured: true,
            name: "house",
            price: "199",
            img: "/images/house.jpg",
        },
        {
            date: "",
            description: "sadfasdfasdfasdfg",
            docId: "1ffgyLszRlcRnmqvMAjg",
            featured: true,
            name: "house",
            price: "130",
            img: "/images/house.jpg",
        },
    ];

    return (
        <Card.Container>
            <Card.Title>Spaces to rent out</Card.Title>
            <Card.Group>
                <Card.Group>
                    {products.map((product) => (
                            <Card key={product.docId}>
                                <Card.Image src={product.img} />
                                <Card.Group>
                                    <Card.SubTitle>{product.name}</Card.SubTitle>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Group className="rating-price">
                                        <Card.Text>Rating here</Card.Text>
                                        <Card.Text className="price">C${product.price}/per 2 hours</Card.Text>
                                    </Card.Group>
                                </Card.Group>
                            </Card>
                    ))}
                </Card.Group>
                <Card.Display>
                    <Card.Title>Featuring the item On LEft instant Load</Card.Title>
                </Card.Display>
            </Card.Group>
        </Card.Container>
    );
}
