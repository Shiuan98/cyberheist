import React, { Component } from 'react';
import HeistUnreveal from '../assets/img/unreveal.gif';
import HeistKyoto from '../assets/img/Kyoto-01.jpg';
import HeistKyushu from '../assets/img/Kyushu-01.jpg';
import HeistMiyazaki from '../assets/img/Miyazaki-01.jpg';
import HeistGunma from '../assets/img/Gunma-01.jpg';
import HeistOsaka from '../assets/img/Osaka-01.jpg';
import HeistTokyo from '../assets/img/Tokyo-01.jpg';

import FooterVideo from '../assets/img/footer-video.mp4';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


SwiperCore.use([Navigation]);

class HeistWork extends Component {

  render() {
    return (
        <div class="heist-work">
        <div class="container-fluid">
        <h2>How Cyber Heist work?</h2>
        <h2><strong>ヘイストの仕組み？</strong></h2>
        <p>Each NFT represent 1 entry into the upcoming heist. The NFT will reveal after the heist is completed. Each Cyber Heist member has different ability, hence different rewards.</p>
        <br></br>
        <p class="clicktoplay">Click to view animation ↓</p>
        <div class="row hide-mobile">      

        <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
            <div class="modal" id="modal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">

          <div class="modal-body mb-0 p-0">

            <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline>
          <source src='https://cyberheist.wtf/static/media/kyoto-preview.8d72fa37.mp4'/>
          </video>`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a> <img src={HeistKyoto} data-toggle="modal" data-target="#modal6" /></a>
   
             <h2>Kyoto 京都</h2>
             <h3>Reward: <span class="text-white">2 $MATIC</span></h3>

            <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Human (Male)</div>
                <div class="col-md-12">CAREER : Student</div>
                <div class="col-md-12">WEAPON : Beam Katana X2, Shurikens</div>
                <div class="col-md-12">SPECIALITY : Sword fight</div>
              </div>

            </div>

        </div>

        </div>
        </div>

        <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
            <div class="modal" id="modal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">

          <div class="modal-body mb-0 p-0">

            <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
              <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline >
          <source src='https://cyberheist.wtf/static/media/kyushu-preview.552bd35c.mp4'/>
          </video>`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a> <img src={HeistKyushu} data-toggle="modal" data-target="#modal5" /></a>
        
             <h2>Kyushu 九州</h2>
             <h3>Reward: <span class="text-white">4 $MATIC</span></h3>

             <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Enchance Human (Male)</div>
                <div class="col-md-12">CAREER : Miner</div>
                <div class="col-md-12">WEAPON : Metal Arm, Shield</div>
                <div class="col-md-12">SPECIALITY : Iron punch, Drilling, Super strength</div>
              </div>
            </div>

        </div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
          <div class="modal" id="modal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">

          <div class="modal-body mb-0 p-0">

            <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
              <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline >
          <source src='https://cyberheist.wtf/static/media/miyazaki-preview.1cd1bb96.mp4'/>
          </video>`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a> <img src={HeistMiyazaki} data-toggle="modal" data-target="#modal4" /></a>
      
             <h2>Miyazaki 宮崎</h2>
             <h3>Reward: <span class="text-white">6 $MATIC</span></h3>

             <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Cyborg (Female)</div>
                <div class="col-md-12">CAREER : Unknown</div>
                <div class="col-md-12">EQUIP : Razer Claw X2</div>
                <div class="col-md-12">SPECIALITY : Slaying, Unlimited stamina</div>
              </div>
            </div>

        </div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
           <div class="modal" id="modal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">

          <div class="modal-body mb-0 p-0">

            <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline >
          <source src='https://cyberheist.wtf/static/media/gunma-preview.c24096a4.mp4'/>
          </video>`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a> <img src={HeistGunma} data-toggle="modal" data-target="#modal3" /></a>
    
           <h2>Gunma 群馬</h2>
           <h3>Reward: <span class="text-white">8 $MATIC</span></h3>

             <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Human (Male)</div>
                <div class="col-md-12">CAREER : Cyber Police</div>
                <div class="col-md-12">EQUIP : Skateboard, Bomb Bugs</div>
                <div class="col-md-12">SPECIALITY : Computer hacking, Gamer, Thievery</div>
              </div>
            </div>

        </div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
            <div class="modal" id="modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">

          <div class="modal-body mb-0 p-0">

            <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
             
      <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline >
          <source src='https://cyberheist.wtf/static/media/osaka-preview.d1dd66d4.mp4'/>
          </video>`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a> <img src={HeistOsaka} data-toggle="modal" data-target="#modal2" /></a>

             <h2>Osaka 大阪</h2>
             <h3>Reward: <span class="text-white">10 $MATIC</span></h3>
           
            <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Human</div>
                <div class="col-md-12">CAREER : Professor</div>
                <div class="col-md-12">EQUIP : Plasma Pistol, Scout Owl</div>
                <div class="col-md-12">SPECIALITY : Weapon expert, Spying & Combat</div>
              </div>
            </div>
        </div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
      <div class="modal" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">

          <div class="modal-body mb-0 p-0">

            <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
              <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline >
          <source src='https://cyberheist.wtf/static/media/tokyo-preview.09aebc6d.mp4'/>
          </video>`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a> <img src={HeistTokyo} data-toggle="modal" data-target="#modal1" /></a>
     
            <h2>Tokyo 東京</h2>
            <h3>Reward: <span class="text-white">20 $MATIC</span></h3>

            <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Mage</div>
                <div class="col-md-12">CAREER : Shrine Maiden</div>
                <div class="col-md-12">EQUIP : Unknown</div>
                <div class="col-md-12">SPECIALITY : Summoning & Space Magic</div>
              </div>
            </div>

        </div>

        </div>
        </div>

        </div>

        <Swiper loop={true} navigation={true} modules={[Pagination]} className="mySwiper text-center show-mobile">
                <SwiperSlide>
                     <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
      
        <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">    
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline controls poster={HeistKyoto}>
          <source src='https://cyberheist.wtf/static/media/kyoto-preview.8d72fa37.mp4'/>
          </video>`}}/>
          </div>
          
             <h2>Kyoto 京都</h2>
             <h3>Reward: <span class="text-white">2 $MATIC</span></h3>

             <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Human (Male)</div>
                <div class="col-md-12">CAREER : Student</div>
                <div class="col-md-12">WEAPON : Beam Katana X2, Shurikens</div>
                <div class="col-md-12">SPECIALITY : Sword fight</div>
              </div>

            </div>
            </div>
        </div>
        </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
      
        <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">    
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline controls poster={HeistKyoto}>
          <source src='https://cyberheist.wtf/static/media/kyushu-preview.552bd35c.mp4'/>
          </video>`}}/>
          </div>   
             <h2>Kyushu 九州</h2>
             <h3>Reward: <span class="text-white">4 $MATIC</span></h3>

            <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Enchance Human (Male)</div>
                <div class="col-md-12">CAREER : Miner</div>
                <div class="col-md-12">WEAPON : Metal Arm, Shield</div>
                <div class="col-md-12">SPECIALITY : Iron punch, Drilling, Super strength</div>
              </div>
            </div>
        </div>
        </div>
        </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
      
        <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">    
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline controls poster={HeistMiyazaki}>
          <source src='https://cyberheist.wtf/static/media/miyazaki-preview.1cd1bb96.mp4'/>
          </video>`}}/>
          </div>  
             <h2>Miyazaki 宮崎</h2>
             <h3>Reward: <span class="text-white">6 $MATIC</span></h3>

              <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Cyborg (Female)</div>
                <div class="col-md-12">CAREER : Unknown</div>
                <div class="col-md-12">EQUIP : Razer Claw X2</div>
                <div class="col-md-12">SPECIALITY : Slaying, Unlimited stamina</div>
              </div>
            </div>
        </div>
        </div>
        </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
      
        <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline controls poster={HeistGunma}>
          <source src='https://cyberheist.wtf/static/media/gunma-preview.c24096a4.mp4'/>
          </video>`}}/>
            </div>
            <h2>Gunma 群馬</h2>
            <h3>Reward: <span class="text-white">8 $MATIC</span></h3>
             <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Human (Male)</div>
                <div class="col-md-12">CAREER : Cyber Police</div>
                <div class="col-md-12">EQUIP : Skateboard, Bomb Bugs</div>
                <div class="col-md-12">SPECIALITY : Computer hacking, Gamer, Thievery</div>
              </div>
            </div>

        </div>
        </div>
        </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">
         
        <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline controls poster={HeistGunma}>
          <source src='https://cyberheist.wtf/static/media/osaka-preview.d1dd66d4.mp4'/>
          </video>`}}/>
            </div> 
            <h2>Osaka 大阪</h2>
            <h3>Reward: <span class="text-white">10 $MATIC</span></h3>

             <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>
            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Human</div>
                <div class="col-md-12">CAREER : Professor</div>
                <div class="col-md-12">EQUIP : Plasma Pistol, Scout Owl</div>
                <div class="col-md-12">SPECIALITY : Weapon expert, Spying & Combat</div>
              </div>
            </div>
        </div>
        </div>
        </div>
            </SwiperSlide>

                <SwiperSlide>
                 <div class="col-md-3">
        <div class="row">
        <div class="col-md-12">  
        <div class="embed-responsive embed-responsive-1by1 z-depth-1-half">
            <div 
        dangerouslySetInnerHTML={{
          __html: 
          `<video autoplay loop muted playsinline controls poster={HeistGunma}>
          <source src='https://cyberheist.wtf/static/media/tokyo-preview.09aebc6d.mp4'/>
          </video>`}}/>
            </div>      
            <h2>Tokyo 東京</h2>
            <h3>Reward: <span class="text-white">20 $MATIC</span></h3>


            <div class="character-stat">
            <div class="row">
            <div class="col-md-2">
            HP :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            ATK :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            DEF :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            INT :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box white-box"></div>
            </div>
            </div>

             <div class="col-md-2">
            AGL :
            </div>
            <div class="col-md-10">
            <div class="vertical-middle">
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1 white-box"></div>
            <div class="stat-box mr-1"></div>
            <div class="stat-box"></div>
            </div>
            </div>
            </div>
            </div>

            <div class="character-info">
              <div class="row">
                <div class="col-md-12">RACE : Mage</div>
                <div class="col-md-12">CAREER : Shrine Maiden</div>
                <div class="col-md-12">EQUIP : Unknown</div>
                <div class="col-md-12">SPECIALITY : Summoning & Space Magic</div>
              </div>
            </div>

        </div>
        </div>
        </div>
                </SwiperSlide>

            </Swiper>


        </div>
        </div>
        
    );
  }
}

export default HeistWork;