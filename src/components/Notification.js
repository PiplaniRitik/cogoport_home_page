import React, { useEffect, useState } from 'react';
import './Notification.css';

const Alert = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [containerBackground, setContainerBackground] = useState('#ee3425');

  const handleClose = () => {
    setShowAlert(false);
    setContainerBackground('yellow');
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showAlert ? (
    <div className={`alert ${isScrolled ? 'white-bg' : 'yellow-bg'}`} style={{ backgroundColor: containerBackground }}>
      <div className="alert-text">

        <img src={require("./images/cogoport_icon.webp")} alt="icon" />

        <strong>Limited Time Offer: Get 15% off on all Cogo Assured Rates. <a href="#" className="book-link">Book today</a></strong>


      </div>
      <div className="close-btn" onClick={handleClose}>
        &#x2715;
      </div>
    </div>
  ) : null;
};

export default Alert;
