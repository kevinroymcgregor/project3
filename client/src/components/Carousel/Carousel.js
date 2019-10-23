import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../Carousel/Carousel.css';


class Carousel extends Component {
    constructor(props){
        super(props);
    }

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

    // componentWillUnmount() {
    //     let elems = document.querySelectorAll('.carousel');

    //     M.Carousel.destroy(elems)
    // }

    render() {
        return (
            <div className="retro-carousel">
                <div className="carousel carousel-slider">
                    {this.props.itemImages ? this.props.itemImages.map(img => (
                        // console.log(img)
                        <a className="carousel-item"><img src={img} key={img} /> </a>
                    )) : <a className="carousel-item"><img src="https://lorempixel.com/800/400/food/1" /></a> }
                {/* <a className="carousel-item"><img src={this.props.itemImages} /></a> */}
                    {/* <a className="carousel-item"><img src="https://lorempixel.com/800/400/food/1" /></a>
                    <a className="carousel-item"><img src="https://lorempixel.com/800/400/food/2" /></a>
                    <a className="carousel-item"><img src="https://lorempixel.com/800/400/food/3" /></a>
                    <a className="carousel-item"><img src="https://lorempixel.com/800/400/food/4" /></a> */}
                </div>
            </div>
        )
    }
}

export default Carousel;