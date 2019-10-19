import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../Carousel/Carousel.css';


class Carousel extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.carousel');
            let options = {
                indicators: true,
                fullWidth: true,
                dist: 0,
                padding: 10
            }
            let instances = M.Carousel.init(elems, options);
        });
    }

    render() {
        return (
            <div className="retro-carousel itemDetailsCarousel">
                <div className="carousel carousel-slider">
                <a className="carousel-item"><img src={this.props.itemImages} /></a>
                    {/* <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1" /></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a> */}
                </div>
            </div>
        )
    }
}

export default Carousel;