import React, { useState } from 'react';
import './Notification.css';
const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [containerBackground, setContainerBackground] = useState('#ee3425');
  const handleClose = () => {
    setShowAlert(false);
    setContainerBackground('yellow');
  };

  return showAlert ? (
    <div className="alert" style={{ backgroundColor: containerBackground }}>
      
      <div className="alert-text">
      <div className="logo">
      {/* <img alt="icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" className="styles_icon__ktx3Z" srcset="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&amp;w=16&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&amp;w=32&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&amp;w=32&amp;q=75" style={{color: "transparent"}}/> */}
      <img src={require("./cogoport_icon.webp")}  style={{height:"16px", width:"16px"}}/>
      
        <p><strong>Limited Time Offer: Get 15% off on all Cogo Assured Rates. <a href="#" className="book-link">Book today</a></strong></p>
        </div>
      </div>
      <div className="close-btn" onClick={handleClose}>
      &#x2715;
      </div>
    </div>
  ) : null;
//   (<div className="alt-alert" style={{ backgroundColor: containerBackground }}>yellow</div>) ;
};

export default Alert;
