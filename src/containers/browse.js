import React, { useState, useContext } from "react";
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'

import { useContent } from "../hooks";
import { Card, Carousel } from "../components";
import { CarouselContainer } from './carousel'
import { selectionMap } from "../utils";
import { GiConsoleController } from "react-icons/gi";

export function BrowseContainer({ products }) {

    const [selectedProduct, setSelectedProduct] = useState(null)



    //const { products } = useContent('products')

    //console.log(products)
    //const productsFilter = selectionMap(products)

    //console.log(productsFilter)


    return selectedProduct === null ? (
        <Card.Container>
            <Card.Group>
                {products.map((product) => (
                    <Card key={product.docId}>
                        <Card.Image>
                            <CarouselContainer images={product.img} />
                        </Card.Image>
                    
                        <Card.Group>
                            <Card.SubTitle
                                onClick={() =>
                                setSelectedProduct(product)}
                            >{product.name}</Card.SubTitle>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Group className="rating-price">
                                <Card.Text>Rating here</Card.Text>
                                <Card.Text className="price">C${product.price}/per 2 hours</Card.Text>
                            </Card.Group>
                        </Card.Group>
                    </Card>
                ))}
            </Card.Group>
        </Card.Container>
    ) : (
        
            <Card.Container>
                <Card.Group>
                        <Card key={selectedProduct.docId}>
                            <Card.Image>
                                <CarouselContainer images={selectedProduct.img} />
                            </Card.Image>
                            <Card.Group>
                                <Card.SubTitle>{selectedProduct.name}</Card.SubTitle>
                                <Card.Text>{selectedProduct.description}</Card.Text>
                                <Card.Group className="rating-price">
                                    <Card.Text>Rating here</Card.Text>
                                    <Card.Text className="price">C${selectedProduct.price}/per 2 hours</Card.Text>
                                </Card.Group>
                            </Card.Group>
                        </Card>
                 
                </Card.Group>
            </Card.Container>
        )
}
