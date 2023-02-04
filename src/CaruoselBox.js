import React, { Component } from "react";
import Carousel from 'react-boostrap/Carousel';
import forestImg from '../assets/forest.jpg';
import dforestImg from '../assets/dforest.jpg';



export default class CarouselBox extends Component {
  render() {
    return(
        <Carousel>
          <Carousel.item>
            <img
                className="d-block w-100"
                src={ forestImg }
                alt="Forest"
            />
            <Carousel.Caption>
              <h3>Sanjar</h3>
            </Carousel.Caption>
          </Carousel.item>
          <Carousel.item>
            <img
                className="d-block w-100"
                src={ dforestImg }
                alt="Forest"
            />
            <Carousel.Caption>
              <h3>Sanjar</h3>
            </Carousel.Caption>
          </Carousel.item>
          <Carousel.item>
            <img
                className="d-block w-100"
                src={ forestImg }
                alt="Forest"
            />
            <Carousel.Caption>
              <h3>Sanjar</h3>
            </Carousel.Caption>
          </Carousel.item>
        </Carousel>
    )
  }
}
