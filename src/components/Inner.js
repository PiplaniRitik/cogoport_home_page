import React from 'react';
import './Inner.css'
const Inner = () => {
  return (
    <div className="Inner-Container">
    <div className="flex-container">
      <div className="left-item">
        <p>
      <h1>Grow Faster,  Go Global.</h1>
      Strengthen your Supply Chain, and Scale your Business
      <br/>
with Reliable Shipping and Cashflows.
        </p>
        <div className="form">
          <p>Talk to us now:</p>
          <div className="form-inputs">
            <select>
              <option value="1">+1</option>
              <option value="91">+91</option>
              <option value="44">+44</option>
              {/* Add more country code options */}
            </select>
            <input type="text" placeholder="Mobile Number" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="right-item">
        <video src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/updated_gif_1.webm" type="video/webm" controls />
      </div>
    </div>
    <div className="flex-container-horizontal">
    <div className="flex-item"> <h2 style={{color:'red'}}>180+ </h2> <h4>countries Served</h4></div>
    <div className="flex-item"><h2 style={{color:'red'}}>10,000 </h2> <h4>Ports Pairs Served</h4></div>
    <div className="flex-item"><h2 style={{color:'red'}}>30,000+ </h2> <h4>Tons of Air Cargo Moved</h4></div>
    <div className="flex-item"><h2 style={{color:'red'}}>7,00,000+</h2> <h4>Containers Moved</h4></div>
  </div>
  <div className="flex-container2">
      <div className="left-item">
        <p>
      <h2>One Stop Solution for Your <br/>Supply Chain</h2>
      Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.
        </p>
        </div>
      <div className="right-item">
      <div class="image"><img alt="productCheck" loading="lazy" width="280" height="360" decoding="async" data-nimg="1" className="styles_product_image__H5xch" srcset="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&amp;w=640&amp;q=75"/></div>
      </div>
    </div>
  </div>
  );
};

export default Inner;
