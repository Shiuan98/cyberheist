import React, { Component } from 'react';
import Gang16 from '../assets/img/CyberHeist-Gang-16.png';
import Gang17 from '../assets/img/CyberHeist-Gang-17.png';
import Gang18 from '../assets/img/CyberHeist-Gang-18.png';
import Gang19 from '../assets/img/CyberHeist-Gang-19.png';
import Gang20 from '../assets/img/CyberHeist-Gang-20.png';
import Gang21 from '../assets/img/CyberHeist-Gang-21.png';
import Gang22 from '../assets/img/CyberHeist-Gang-22.png';
import Gang23 from '../assets/img/CyberHeist-Gang-23.png';
import Gang24 from '../assets/img/CyberHeist-Gang-24.png';
import Gang25 from '../assets/img/CyberHeist-Gang-25.png';
import Gang26 from '../assets/img/CyberHeist-Gang-26.png';
import Gang27 from '../assets/img/CyberHeist-Gang-27.png';
import Gang28 from '../assets/img/CyberHeist-Gang-28.png';
import Gang29 from '../assets/img/CyberHeist-Gang-29.png';

import SwiperCore, { Autoplay, Navigation, Pagination,Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


SwiperCore.use([Autoplay,Lazy,Navigation]);


export default function GangMember() {
      return (
    <div class="gang-member">
        <div class="container-fluid">
    	 	<h2>Gang Behind The Mask</h2>
        <Swiper 
        lazy={true}
        loop={true}
        freeMode={true}
        speed={600}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        slidesPerView={7}
        spaceBetween={30}
        modules={[Autoplay, Pagination]}
        breakpoints={{
            320: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
        }}
        className="mySwiper">
        <SwiperSlide>
            <img src={Gang16} />
            <h4 class="text-center">Brand Director</h4>
            <p class="text-center">Olivia T</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang17} />
            <h4 class="text-center">C.T.O</h4>
            <p class="text-center">Black Alvin</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang18} />
            <h4 class="text-center">Project Manage</h4>
            <p class="text-center">Herman</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang19} />
            <h4 class="text-center">Marketing</h4>
            <p class="text-center">White Alvin</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang20} />
            <h4 class="text-center">Strategist</h4>
            <p class="text-center">SK</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang21} />
            <h4 class="text-center">Marketing</h4>
            <p class="text-center">Takumi</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang22} />
            <h4 class="text-center">C.E.O</h4>
            <p class="text-center">Jin</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang23} />
            <h4 class="text-center">Content Planner</h4>
            <p class="text-center">Suki</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang24} />
            <h4 class="text-center">Web3 Developer</h4>
            <p class="text-center">Shiuan</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang25} />
            <h4 class="text-center">Project Manage</h4>
            <p class="text-center">Kenny</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang26} />
            <h4 class="text-center">C.O.O</h4>
            <p class="text-center">Joshua C</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang27} />
            <h4 class="text-center">Art Director</h4>
            <p class="text-center">Aiko</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang28} />
            <h4 class="text-center">Videographer</h4>
            <p class="text-center">Kazuya</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Gang29} />
            <h4 class="text-center">Marketing</h4>
            <p class="text-center">Raymond</p>
        </SwiperSlide>
        </Swiper>
        </div>
    </div>
    );
}
