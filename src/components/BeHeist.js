import React, { Component } from 'react';
import BulletHole2 from '../assets/img/bullet-hole-2.png';
import WOW from 'wowjs';

class BeHeist extends Component {
  
  render() {
    return (
        <div class="be-heist text-center">
          <span class="number-big mb-3" id="heist-number">1,000,000</span>
          <br></br> 
          <span class="number-big mb-3 small-matic">$MATIC</span>
          {/* <div class="number-big mb-3">
          <span>¥</span>
          <div id="heist-number"></div>
          </div> */}
          <h2 class="text-uppercase">To Be Heist</h2>
        	<img src={BulletHole2} class="bullet2 wow animate__bounceIn animated" data-wow-duration="1s" data-wow-delay=".3s"/>
        	<div class="container">
        	<p>
            It's the year 2108, <b>Greed</b> and <b>Corruption</b> have caused financial meltdown throughout our nation.
            Dirty Politicians and Gluttonous Zaibatsu have always manipulated us for their own benefits. 
            <br></br><br></br>
            Now is our time! Unite together, we rise! We fight to reclaim what is rightfully ours!
            CyberHeist is a symbol of unity, a willpower to restore order and create a better future.
            <br></br><br></br>
            <b>Be part of the GANG.</b>
            <br></br>
            <b>Join the CyberHeist.</b>
          </p>
        	 </div>
        </div>
    );
  }
}

export default BeHeist;