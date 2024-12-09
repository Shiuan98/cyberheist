// Import dependencies
import React, { useEffect, useState, useRef, lazy} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation } from "swiper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import WOW from 'wowjs';
import $ from 'jquery';
import MiddleEllipsis from "react-middle-ellipsis";

// Import class components
import Header from './components/Header';
import Footer from './components/Footer';
import Sound from './components/Sound';
import HeroBanner from './components/HeroBanner';
import BeHeist from './components/BeHeist';
import SeasonOne from './components/SeasonOne';
import HeistWork from './components/HeistWork';
import Hiroshima from './components/Hiroshima';
import Roadmap from './components/Roadmap';
import GangMember from './components/GangMember';
import HeistBegin from './components/HeistBegin';
import Agent from './components/Agent';



// Import image
import HeistHuman from './assets/img/heist-human.png';
import BulletHole1 from './assets/img/bullet-hole-1.png';
import ReferralIcon from './assets/img/referral-icon.png';
import CyberHeist from './assets/img/cyberheist.jpg';
import HeistSpain from './assets/img/spainheist.jpg';
import HeistKorea from './assets/img/koreaheist.jpg';
import HeistHiroshima from './assets/img/Hiroshima.jpg';
import HeistPoliceSmoke from './assets/img/Heist-Fi NFT-007-PoliceR.png';
import HeistPoliceMobile from './assets/img/Heist-Fi NFT-007-PoliceR-cut-mobile.png';
import DiscordIcon from './assets/img/discord.png';
import TwitterIcon from './assets/img/twitter.png';
import SeaSuccess from './assets/img/OpenSea-Logo.png';
import MintSuccess from './assets/img/Mint more-02.png';


import { BrowserRouter as Router,Route,Routes,Link,useParams} from 'react-router-dom';

function App() {

  // Initiate animations
  AOS.init();

  // Define variables & set states
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState('Connect Metamask.');
  const [mintSuccess, setMintSucess] = useState(false);
  const [mintQuantity, setMintQuantity] = useState(100);

  const handleChange = (selection) => {
    if (selection.target.value <= 0 || selection.target.value == null || selection.target.value == '') {
      setMintQuantity(1);
      setFeedback("You must recruit at least 1 GANG member.");
    } else if (selection.target.value > 200) {
      setMintQuantity(200);
      setFeedback("Maximum 10K GANG member per transaction.");
    } else {
      setMintQuantity(selection.target.value);
      setFeedback("");
    }
  }
  
  const [mintingNFT, setMintingNFT] = useState(false);

  // Public mint
  const publicMint = (mintQuantity) => {
    setMintingNFT(true);
    setMintSucess(false);
    blockchain.smartContract.methods
      .mint(blockchain.account, 1, mintQuantity)
      .send({
        gasLimit: "5000000",
        maxPriorityFeePerGas: "40000000000",
        maxFeePerGas: "60000000000",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((2*mintQuantity).toString(), "ether"),
      })
      // Transaction fail / Error
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction rejected / failed. Please try again.");
        setMintingNFT(false);
      })
      // Transaction success / Minting completed
      .then((receipt) => {
        setMintingNFT(false);
        setMintSucess(true);
        setFeedback("Mint success. Welcome to Cyber Heist.");
      });
  };

  const [agentCodeName, setAgentCodeName] = useState('');
  const [agentMint, setAgentMint] = useState(false);
  const [agentWallet, setAgentWallet] = useState(null);

  const getAgentAddress = () => {
    // Get agent wallet using code name from URL
    blockchain.smartContract.methods.codeName(agentCodeName).call()
    .then((results) => {
      if (results != null || results != "0x0000000000000000000000000000000000000000") {
        setAgentWallet(results);
      } else {
        setAgentWallet(null);
      }
    });
  };

  // Agent mint
  const gangMemberMint = (mintQuantity) => {
    setMintingNFT(true);
    setMintSucess(false);
    blockchain.smartContract.methods
      .memberMint(blockchain.account, 1, mintQuantity, agentWallet)
      .send({
        gasLimit: "5000000",
        maxPriorityFeePerGas: "40000000000",
        maxFeePerGas: "60000000000",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((2*mintQuantity).toString(), "ether"),
      })
      // Transaction fail / Error
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction rejected / failed. Please try again.");
        setMintingNFT(false);
      })
      // Transaction success / Minting completed
      .then((receipt) => {
        setMintingNFT(false);
        setMintSucess(true);
        setFeedback("Mint success. Welcome to Cyber Heist.");
      });
  };

  const [referralWallet, setReferralWallet] = useState(null);
  const [referralFeedback, setReferralFeedback] = useState("");
  // const [referralActive, setReferralActive] = useState(false);
  
  const captureReferral = (selection) => {    
    if (selection.target.value == '' || selection.target.value == null) {
      setReferralWallet(null);
      setReferralFeedback("");
    } else if (selection.target.value.length != 42) {
      setReferralWallet(null);
      setReferralFeedback("Wallet must be more than 42 characters.");  
    } else if (blockchain.web3.utils.isAddress(selection.target.value) == false) {
      setReferralWallet(null);
      setReferralFeedback("Invalid wallet address.");
    } else {
      setReferralWallet(selection.target.value);
      setReferralFeedback("Referral wallet is valid.");
      console.log("Referral wallet: ", referralWallet);
    }
  }

  // Public mint with referral
  const publicReferralMint = (mintQuantity, referralWallet) => {
    setMintingNFT(true);
    setMintSucess(false);
    blockchain.smartContract.methods
      .referralMint(blockchain.account, 1, mintQuantity, referralWallet)
      .send({
        gasLimit: "5000000",
        maxPriorityFeePerGas: "40000000000",
        maxFeePerGas: "60000000000",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((2*mintQuantity).toString(), "ether"),
      })
      // Transaction fail / Error
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction rejected / failed. Please try again.");
        setMintingNFT(false);
      })
      // Transaction success / Minting completed
      .then((receipt) => {
        setMintingNFT(false);
        setMintSucess(true);
        setFeedback("Mint success. Welcome to Cyber Heist.");
      });
  };

  // Agent mint with referral
  const gangMemberReferralMint = (mintQuantity, referralWallet) => {
    setMintingNFT(true);
    setMintSucess(false);
    blockchain.smartContract.methods
      .memberReferralMint(blockchain.account, 1, mintQuantity, referralWallet, agentWallet)
      .send({
        gasLimit: "5000000",
        maxPriorityFeePerGas: "40000000000",
        maxFeePerGas: "60000000000",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((2*mintQuantity).toString(), "ether"),
      })
      // Transaction fail / Error
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction rejected / failed. Please try again.");
        setMintingNFT(false);
      })
      // Transaction success / Minting completed
      .then((receipt) => {
        setMintingNFT(false);
        setMintSucess(true);
        setFeedback("Mint success. Welcome to Cyber Heist.");
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      setFeedback("");
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);


  /*Switch Network*/
  const networks = {
    ethereum: {
      chainId: `0x${Number(1).toString(16)}`,
      chainName: "Ethereum Mainnet",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: [
        "https://mainnet.infura.io/v3/",
        "https://api.mycryptoapi.com/eth"
      ],
      blockExplorerUrls: ["https://etherscan.io"]
    },
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org"
      ],
      blockExplorerUrls: ["https://bscscan.com"]
    }

  };

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName]
          }
        ]
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const [error, setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {
    dispatch(connect());
    getData();
    console.log({ chainId });
  };

  useEffect(() => {
    if(window.ethereum) {
    window.ethereum.on("chainChanged", networkChanged);
    }
    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  useEffect(() => {
    new WOW.WOW({
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true, 
    }).init();
  }, [])

  window.addEventListener('scroll', function(e) {
        if( $(window).scrollTop() <= 50) {
            $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
          new WOW.WOW({ }).init();
        }
  });

  const [faqs, setfaqs] = useState([

    {
      season: 'SEASON 1: ',
      question: 'Cyber Heist: Tokyo Station',
      img:'https://cyberheist.wtf/static/media/season1.82b4bbd1.jpg',
      answer: 'In the year 2108, greed and corruption of the leaders have caused the nation to fall into a financial crisis. The riches are getting richer while the rest of us struggle to make a living. They fucked up, and our people are paying their bills! \n\n The Cyber Heist HQ is now recruiting Gang Members to join the Heist. We are going to fight for a change. We shall rise! It is time to reclaim what is rightfully ours. Join the Gang now!',
      open: true    
    },

    {
      season: 'SEASON 2: ',
      question: 'Hiroshima Prison Break',
      img:'https://cyberheist.wtf/static/media/season2.00579430.jpg',
      answer: 'Oh no, one of the Gang Leader Hiroshima has been captured into the CyberPrison. The Gang will leave no Gang behind! We are formulating a master plan to break in and help Hiroshima escape.',
      open: false
    },

    {
      season: 'SEASON 3: ',
      question: 'The Global Invasion',
      img:'https://cyberheist.wtf/static/media/season3.d4932a1a.jpg',
      answer: 'With the return of Hiroshima, the Cyber Heist Gang regain its full strength & capacity. The gang is now ready to take control of the Metaverse.',
      open: false    
    },

    {
      season: 'SEASON 4: ',
      question: 'CyberBank 2108',
      img:'https://cyberheist.wtf/static/media/season4.76710040.jpg',
      answer: 'The Cyber Heist Gang is ready to setup our base in the Metaverse. The Gang will acquire Sandbox Land NFT to build their HQ base. Finally, take control of CyberVerse.',
      open: false    
    }

      ]);

    const toggleFAQ = index =>{
      setfaqs(faqs.map((faq, i) =>{
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false;
        }
        return faq;
      }))

    }

  return (
    <Router>
      <Routes>
        <Route path="/:codeName" element={<Agent setAgentCodeName={setAgentCodeName} setAgentMint={setAgentMint}/>}/>
      </Routes>
      <div>
        <Header/>
        <div>
          <Sound/>
          <div>
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <button class="connect-wallet" onClick={(e) => {
                e.preventDefault();
                setFeedback("Connecting Wallet...");
                dispatch(connect());
                getData();
              }}>
                Connect Wallet
              </button> 
            ) : (
              <button class="connect-wallet">
                <div class="wallet-box">
                  <MiddleEllipsis>
                    <span>{blockchain.account}</span>
                  </MiddleEllipsis>
                </div>
              </button>
            )}
          </div>
          <HeroBanner />
          <BeHeist />     
          <img src={BulletHole1} class="bullet11 wow animate__bounceIn animated" data-wow-duration="1s" data-wow-delay=".2s"/>
          <div class="heist-mint" id="heist-mint">     
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 text-center">
                  <div class="img-out">
                    <figure class="img-stack">
                      <img src={HeistSpain} class="wow animate__rollOutRight animated" data-wow-duration="1s" data-wow-delay=".2s" />
                    </figure> 
                    
                    <figure class="img-stack">
                      <img src={CyberHeist} class="heist-first" />
                    </figure>
                    
                    <figure class="img-stack">
                      <img src={HeistKorea} class="wow animate__rollOutLeft animated" data-wow-duration="1s" data-wow-delay=".2s" />
                    </figure>
                  </div>
                </div>
                <div class="col-md-7">
                  <h2>Join CyberHeist GANG now!</h2>
                  <p>Mint 1 Summoning Spell NFT to be part of the GANG. The Summoning Spell NFT is required to reveal your GANG character and claim heist reward.</p>
                  {blockchain.account === "" || blockchain.smartContract === null ? (
                    <div class="">
                      <h3><img src={HeistHuman}/> <span>=</span> 2 $MATIC</h3>
                      <button class="connect-metamask text-uppercase" onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}>
                      Connect Wallet
                      </button>
                      <br></br>
                    </div>
                  ) : (
                    <div class="minting-section">

                      {mintSuccess == false ? (
                        <div>
                          <div class="referral-part">
                            <img src={ReferralIcon} class="referral-icon" />
                            <input class="referral" type="text" placeholder="Referral Wallet Address..." maxLength={42} onChange={captureReferral}/>
                            <h5 class="feedback-text mt-3">{referralFeedback}</h5>       
                          </div>
                          <h3><img src={HeistHuman}/> <span>=</span> 2 $MATIC</h3>
                          <input class="mint-quantity" type="number" min={1} max={200} defaultValue={mintQuantity} onChange={handleChange}/>
                          {getAgentAddress()}
                          <button class="connect-metamask mint-btn text-uppercase" id="" type="submit" disabled={mintingNFT ? 1 : 0} onClick={(e) => {
                            // Check if URL is using agent link
                            if (agentMint == true) {
                              // Agent URL detected, call agent mint function
                              if (referralWallet == null) {
                                // Agent mint
                                setFeedback("Agent mint");
                                gangMemberMint(mintQuantity);
                              } else {
                                // Agent mint with referral
                                setFeedback("Agent referral mint");
                                gangMemberReferralMint(mintQuantity, referralWallet);
                              }
                            } else {
                              // Not agent URL
                              if (referralWallet == null) {
                                setFeedback("Public mint");
                                publicMint(mintQuantity);
                              } else {
                                setFeedback("Public referral mint");
                                publicReferralMint(mintQuantity, referralWallet);
                              }
                            }
                            setFeedback("Minting... Please Wait...");
                          }}>
                            MINT
                          </button>
                          <br></br>
                          <h5 class="feedback-text mt-3">{feedback}</h5>
                          {/* <div class="small-human-group">
                            <img src={HeistHuman} class="small-human" />
                          </div> */}
                        </div>
                      ):(
                        <div>
                        <div class="success-section">
                          <a href='https://claim.cyberheist.wtf' target="_blank">
                            <button class="view-opensea text-uppercase">CLAIM REWARD</button>
                          </a>
                          <br></br>
                          <button class="mint-more text-uppercase" onClick={(e) => {
                            setFeedback("");
                            setMintSucess(false);
                          }}>
                            MINT MORE NFT
                          </button>
                          </div>
                          <h5 class="feedback-text mt-3">{feedback}</h5>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SeasonOne />
        <HeistWork />
        <div class="hiroshima-part">
          <img src={HeistHiroshima} class="hiroshima-charc"/>
          <img src={HeistPoliceSmoke} class="hiroshima-police" />
          <h2 class="hiroshima-name">Hiroshima <strong>広島</strong></h2>
          <img src={HeistPoliceMobile} class="hiroshima-police-mobile" />
        </div>     
        <Hiroshima />
        <div class="roadmap">  
          <div class="container-fluid">
            <h2>Roadmap</h2>
            <h2 class="jap-word"><strong>ロードマップ</strong></h2>
            <div class="roadmap-list">
              {faqs.map((faq, i) => (
              <Roadmap faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
          </div>
        </div>
        <GangMember />
        <HeistBegin />
        <Footer />
      </div>          
    </Router>
  );
}

export default App;
