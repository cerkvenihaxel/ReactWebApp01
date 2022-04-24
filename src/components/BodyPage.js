import React, {Component} from "react";
import bgimage from '../img/image.jpg';
import burger from '../img/burger.jpg';
import lomito from '../img/lomito.jpg';
import Carousel from 'react-bootstrap/Carousel';

export default class NavBar extends Component {
    render() {
        return (

            <div className="bg-image">
            <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={bgimage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Pizzas</h1>
                <p>Masa casera y salsa única</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={lomito}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>Lomitos</h1>
                <p>Siempre la mejor calidad</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={burger}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>Hamburguesas</h1>
                <p>Las hamburguesas más ricas de la provincia</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        /*   
        <div className="bg-image">
        <img src={bgimage} alt="Pizza" fluid/>
        </div>!*/
        );
    }
}