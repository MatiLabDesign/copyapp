import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrusel.css';
import coopo from './../../../../assets/coopo.webp'
import a from './../../../../assets/1b.webp'
import b from './../../../../assets/2b.webp'
import c from './../../../../assets/3b.webp'
import d from './../../../../assets/4b.webp'

export default function Carrusel() {
    return (
        <div className="carousel-container">
        <Carousel autoplay>
            <div>
            <img src={coopo} alt="Slide 1" />
            </div>
            <div>
            <img src={a} alt="Slide 2" />
            </div>
            <div>
            <img src={b} alt="Slide 3" />
            </div>
            <div>
            <img src={c} alt="Slide 3" />
            </div>
            <div>
            <img src={d} alt="Slide 3" />
            </div>
            
        </Carousel>
        </div>
    );
}

