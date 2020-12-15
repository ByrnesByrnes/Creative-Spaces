import React, { useState, useContext } from "react";
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'

import { useContent } from "../hooks";
import { Card, Carousel } from "../components";
import { CarouselContainer } from './carousel'
import { selectionMap } from "../utils";
import { GiConsoleController, GiRoundStar } from "react-icons/gi";
import { BsDot } from 'react-icons/bs'

export function BrowseContainer({ products }) {

  //const { products } = useContent('products')

  //console.log(products)
  //const productsFilter = selectionMap(products)

  //console.log(productsFilter)


  return (
    <Card.Container>
      <Card.Group>
      <Card.Group className="align title">
        <Card.Title>Mississauga</Card.Title>
        <Card.Text>show({products.length})</Card.Text>
      </Card.Group>
        {products.map((product) => (
          <Card.Group className="card-item">
            <Card key={product.docId}>
              <Card.Image>
                <CarouselContainer images={product.img} />
              </Card.Image>

              <Card.Group className="card-info">
                <Card.Group>
                  <GiRoundStar className="rating" />
                  <Card.Text>4.98</Card.Text>
                  <Card.Text className="reviews">(574)</Card.Text>
                </Card.Group>
                <Card.Group className="align">
                  <Card.Text>{product.name}</Card.Text>
                  <BsDot />
                  <Card.Text>Location</Card.Text>
                </Card.Group>
                <Card.Text>{product.description}</Card.Text>
              </Card.Group>
            </Card>
          </Card.Group>
        ))}
      </Card.Group>
    </Card.Container>
  )
}
