import React, { Component } from 'react';
import HeistLetBegin from '../assets/img/heist-begin.png';
import FooterVideo from '../assets/img/footer-video.mp4';
import { Link, animateScroll as scroll } from "react-scroll";

class HeistBegin extends Component {
  
  render() {
    return (
        <div class="heist-begin text-center">
        	<img src={HeistLetBegin} />
            <Link  activeClass="active"
    to="heist-mint"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} >
            <button class="text-uppercase">Join Now</button>
            </Link>
        	 <div 
        dangerouslySetInnerHTML={{
        	__html: 
        	`<video autoplay loop muted playsinline >
        	<source src='https://cyberheist.wtf/static/media/footer-video.b3f06e5d.mp4'/>
        	</video>`}}/>
        </div>
    );
  }
}

export default HeistBegin;