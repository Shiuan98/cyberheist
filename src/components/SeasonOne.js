import React, { Component } from 'react';
import Stage1 from '../assets/img/Stages-01.png';
import Stage2 from '../assets/img/Stages-02.png';
import Stage3 from '../assets/img/Stages-03.png';
import Stage4 from '../assets/img/Stages-04.png';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


SwiperCore.use([Navigation]);


class SeasonOne extends Component {

  render() {
    return (
    	<div class="season-one">
    	 <div class="container-fluid">
    	 	<h2>SEASON 1: <br></br>Tokyo Cyber Heist</h2>
    	 	<br></br>
    	 	<br></br>
    	 	 <div class="season-grid hide-mobile">
       			 <div class="season-stage stage-1 text-center">
       			 <h3>STAGE 1:</h3>
       			 {/* <h3>100k $MATIC</h3> */}
       			 <img src={Stage1} alt="CyberHeist Stage 1" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Kyoto = 2 $MATIC
       			 	</p>

       			 	<p>
       			 		<span>•</span>Kyushu = 4 $MATIC
       			 	</p>

       			 	<p>
       			 		<span>•</span>Miyazaki = 6 $MATIC
       			 	</p>
       			 </div>
       			 </div>

       			  <div class="season-stage stage-2 text-center">
       			 <h3>STAGE 2:</h3>
       			 {/* <h3>600k $MATIC</h3> */}
       			 <img src={Stage2} alt="CyberHeist Stage 2" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NEW NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Gunma = 8 $MATIC
       			 	</p>
       			 </div>
       			 </div>

       			  <div class="season-stage stage-3 text-center">
       			 <h3>STAGE 3:</h3>
       			 {/* <h3>1.5m $MATIC</h3> */}
       			 <img src={Stage3} alt="CyberHeist Stage 3" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NEW NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Osaka = 10 $MATIC
       			 	</p>
       			 </div>
       			 </div>

       			  <div class="season-stage stage-4 text-center">
       			 <h3>STAGE 4:</h3>
       			 {/* <h3>2.5m $MATIC</h3> */}
       			 <img src={Stage4} alt="CyberHeist Stage 4" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NEW NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Tokyo = 20 $MATIC
       			 	</p>
       			 </div>
       			 </div>
    	 </div>

    	 <Swiper loop={true} navigation={true} modules={[Pagination]} className="mySwiper text-center show-mobile">
                <SwiperSlide>
                <div class="season-stage stage-1 text-center">
       			 <h3>STAGE 1:</h3>
       			 {/* <h3>100k $MATIC</h3> */}
       			 <img src={Stage1} alt="CyberHeist Stage 1" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Kyoto = 2 $MATIC
       			 	</p>

       			 	<p>
       			 		<span>•</span>Kyushu = 4 $MATIC
       			 	</p>

       			 	<p>
       			 		<span>•</span>Miyazaki = 6 $MATIC
       			 	</p>
       			 </div>
       			 </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="season-stage stage-2 text-center">
       			 <h3>STAGE 2:</h3>
       			 {/* <h3>600k $MATIC</h3> */}
       			 <img src={Stage2} alt="CyberHeist Stage 2" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NEW NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Gunma = 8 $MATIC
       			 	</p>
       			 </div>
       			 </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="season-stage stage-3 text-center">
       			 <h3>STAGE 3:</h3>
       			 {/* <h3>1.5m $MATIC</h3> */}
       			 <img src={Stage3} alt="CyberHeist Stage 3" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NEW NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Osaka = 10 $MATIC
       			 	</p>
       			 </div>
       			 </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="season-stage stage-4 text-center">
       			 <h3>STAGE 4:</h3>
       			 {/* <h3>2.5m $MATIC</h3> */}
       			 <img src={Stage4} alt="CyberHeist Stage 4" />
       			 <h2>100%</h2>
       			 <h4 class="text-uppercase">Complete</h4>
       			 <p class="text-white text-uppercase">NEW NFT RELEASE:</p>
       			 <div class="text-white">
       			 	<p>
       			 		<span>•</span>Tokyo = 20 $MATIC
       			 	</p>
       			 </div>
       			 </div>
                </SwiperSlide>


         </Swiper>
    	</div>
    	</div>

    );
  }
}

export default SeasonOne;