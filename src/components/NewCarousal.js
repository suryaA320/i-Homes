import React from 'react'
import carousal_1 from '../images/carousImages/carousal_1.jpg';
import carousal_2 from '../images/carousImages/carousal_2.jpg';
import { Button } from 'reactstrap';

const NewCarousal = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousal_1}  alt="i homes prarambh luxuary 2 & 3bhk apartments at adibatla" id='car-img-1' />
          <div class="carousel-caption" id='hero'>
            <h5 id='carousal-main'>i Homes</h5>
            <p id='carousal-subtext'>2 & 3BHK Luxuary Apartments @TCS Adibatla.</p>
            <button className="carousal-button">Explore</button>
          </div>

        </div>
        <div class="carousel-item">
          <img src={carousal_2} class="d-block w-100" alt="i homes prarambh luxuary 2 & 3bhk apartments at adibatla" id='car-img-2' />
          <div class="carousel-caption" id='hero'>
            <h5 id='carousal-main-2'>Designed to exceed your expectations</h5>
            <p id='carousal-subtext-2'>Luxuary Apartments that fit your style.</p>
            <button className="carousal-button">Explore</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default NewCarousal