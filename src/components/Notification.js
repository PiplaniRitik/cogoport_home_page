import React, { useState } from 'react';
import './Notification.css';
const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [containerBackground, setContainerBackground] = useState('red');
  const handleClose = () => {
    setShowAlert(false);
    setContainerBackground('yellow');
  };

  return showAlert ? (
    <div className="alert" style={{ backgroundColor: containerBackground }}>
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <div className="alert-text">
        <p>Limited Time Offer: Get 15% off on all Cogo Assured Rates. <a href="#" className="book-link">Book today</a></p>
      </div>
      <div className="close-btn" onClick={handleClose}>
      &#x2715;
      </div>
    </div>
  ) : null;
//   (<div className="alt-alert" style={{ backgroundColor: containerBackground }}>yellow</div>) ;
};

export default Alert;
