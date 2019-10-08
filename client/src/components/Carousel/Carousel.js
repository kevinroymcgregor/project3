import React, { Component } from 'react';
// Import Materialize
import M from "materialize-css";


class Carousel extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
        });
    }

    render() {
        return (
            <div>
                <div class="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt="1" /></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt="1" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt="1" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt="1" /></a>
                    <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt="1" /></a>
                </div>
            </div>
        )
    }
}

export default Carousel;