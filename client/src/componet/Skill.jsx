import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import  mongo  from "../assets/img/mongo.png";
import  nodejs2  from "../assets/img/nodejs2.png";
import  nestjs  from "../assets/img/nestjs.png";
import  Ts  from "../assets/img/Ts.png";
import  Js  from "../assets/img/js.png";
import  Reactjs  from "../assets/img/Reactjs.png";
import  coloSharp  from "../assets/img/colorSharp.jpg";

const Skill = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return <section className='skill' id='skill'>
    <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2>
                    Skills
                </h2>
                <p>Estas son las skill que he adquirido con a lo largo de mi formacion </p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                        <img src={mongo} alt='Image' />
                        <h5></h5>
                    </div>
                    <div className='item'>
                        <img src={nodejs2} alt='Image' />
                        {/* <h5>Poke Api</h5> */}
                    </div>
                    <div className='item'>
                        <img src={nestjs} alt='Image' />
                        {/* <h5>Poke Api</h5> */}
                    </div>
                    <div className='item'>
                        <img src={Js} alt='Image' />
                        {/* <h5>Poke Api</h5> */}
                    </div>
                    <div className='item'>
                        <img src={Ts} alt='Image' />
                        {/* <h5>Poke Api</h5> */}
                    </div>
                    <div className='item'>
                        <img src={Reactjs} alt='Image' />
                        {/* <h5>Poke Api</h5> */}
                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
    {/* <img className='background-image-left' src={coloSharp} alt="" /> */}
    </section>;
}



export default Skill;