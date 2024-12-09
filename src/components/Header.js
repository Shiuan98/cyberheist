import React, { useEffect, useState, useRef, Component } from 'react';
import HeaderLogo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import DiscordIcon from '../assets/img/discord.png';
import TwitterIcon from '../assets/img/twitter.png';
import OpenseaIcon from '../assets/img/Heist-Fi Web2-14.jpg';

const Header = () => {

    return (
    
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
        <a class="navbar-brand" href="/" target="_blank">
            <img src={HeaderLogo} class="logo" alt="Cyber Heist"></img>
        </a>
        <button class="navbar-toggler d-none" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars"></span>
        </button>
        <div class="icon-part">
        <a href='https://opensea.io/collection/cyberheist-wtf' target="_blank">
        <img src={OpenseaIcon} class="opensea-icon" />
        </a>
        <a href='https://discord.gg/M3p7GqgufZ' target="_blank">
        <img src={DiscordIcon} class="discord-icon" />
        </a>
        <a href='https://twitter.com/CyberHeist_NFT' target="_blank">
        <img src={TwitterIcon} class="twitter-icon" />
        </a>
        </div>
    <div class="collapse navbar-collapse text-uppercase" id="ftco-nav">
      <ul class="nav navbar-nav ml-auto">
      </ul>
  </div>
 </nav>
    );
  
}

export default Header;