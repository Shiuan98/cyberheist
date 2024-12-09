import React, { useState ,Component } from 'react';
import Arrow from '../assets/img/roadmap-arrow.png';
import Season1 from '../assets/img/season1.jpg';
import Season2 from '../assets/img/season2.jpg';
import Season3 from '../assets/img/season3.jpg';
import Season4 from '../assets/img/season4.jpg';

  function Roadmap({faq, index, toggleFAQ}){

    return(
      <div className={"faqs " + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFAQ(index)} >
        <img src={Arrow} class="roadmap-arrow" />
      <h4 class="faq-question faq-heading">
        <span class="text-white">{faq.season}</span>
        {faq.question}
      </h4>
      <p class="faq-answer faq-text read">
        <div class="row">
        <div class="col-md-6 mt-3 pr-3">
          {faq.answer}
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
        <img src={faq.img} />
        </div>
        </div>
      </p>
      </div>
      );
  }

  export default Roadmap;