import React, { useState} from 'react';
import { Carousel } from '../components'
import { IoIosArrowBack, IoIosArrowForward  } from 'react-icons/io'


export function CarouselContainer({images}) {
    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100)
    }

    const goRight = () => {
        x === -100 * (images.length - 1) ? setX(0) : setX(x - 100)
    }


    return (
        <Carousel>
            {images.map((item, i) => 
            <Carousel.Slide key={i} style={{transform: `translateX(${x}%)`}}>
                <Carousel.Image  src={item}/>
            </Carousel.Slide>
            )}
            <Carousel.Control>
                <Carousel.Arrow onClick={goLeft}><IoIosArrowBack /></Carousel.Arrow>
                <Carousel.Arrow onClick={goRight}><IoIosArrowForward /></Carousel.Arrow>
            </Carousel.Control>
        </Carousel>
    )
}