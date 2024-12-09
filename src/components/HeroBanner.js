import React, { Component } from 'react';
import bgVideo from '../assets/img/join-the-gang.mp4';
import BulletHole2 from '../assets/img/bullet-hole-2.png';
import { Player, BigPlayButton } from 'video-react';
import Unreveal from '../assets/video/unreveal.mp4';
import KyotoVid from '../assets/video/kyoto-preview.mp4';
import KyushuVid from '../assets/video/kyushu-preview.mp4';
import MiyazakiVid from '../assets/video/miyazaki-preview.mp4';
import GunmaVid from '../assets/video/gunma-preview.mp4';
import OsakaVid from '../assets/video/osaka-preview.mp4';
import tokyoVid from '../assets/video/tokyo-preview.mp4';

class HeroBanner extends Component {
  
  render() {
    return (
        <div class="hero-banner">
       
            <div class="gang-video d-block w-100">
            <Player src={bgVideo} loop>
      <BigPlayButton position="center"/>

    </Player>
      

    </div>
        {/* <img src={BulletHole2} class="bullet2"/> */}
        </div>
    );
  }
}

export default HeroBanner;