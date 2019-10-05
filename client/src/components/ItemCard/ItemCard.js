import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";

function ItemCard(props) {
    return (
        <div class="col s12 m7">
        <h2 class="header">Horizontal Card</h2>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemCard;