import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export class MainMemoriesSlider extends Component {

    render() {
        return (
            <div>
                <Carousel >
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAGDzwgSydu29aao5rFL-18_jJ1GvMiv1GA&usqp=CAU"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-J1uJT75Eb0F_WecYmi77v12W3nAoB2GYQ&usqp=CAU"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default MainMemoriesSlider
