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
        
          <img src={require("./cogoport_icon.webp")} alt="icon" style={{ width: "16px", height: "16px" }} />
          
            <strong>Limited Time Offer: Get 15% off on all Cogo Assured Rates. <a href="#" className="book-link">Book today</a></strong>
          
        
      </div>
      <div className="close-btn" onClick={handleClose}>
        &#x2715;
      </div>
    </div>
  ) : null;
};

export default Alert;
