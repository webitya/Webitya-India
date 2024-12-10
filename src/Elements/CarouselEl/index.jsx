import React from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';
import './CarouselEl.css';

const CarouselEl = () => {
  const nextArrow = (
    <div className="arrow right-arrow">
      <RightOutlined style={{ fontSize: '28px' }} />
    </div>
  );

  const prevArrow = (
    <div className="arrow left-arrow">
      <LeftOutlined style={{ fontSize: '28px' }} />
    </div>
  );

  return (
    <div className="carousel-container">
      <Carousel 
        autoplay 
        autoplaySpeed={1500}
        dotPosition="bottom"
        effect="scrollx"
      >
        {/* Slide 1 */}
        <div className="carousel-slide slide-1">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Boost Your Brand</h1>
            <p className="carousel-description">Professional digital solutions for growth and visibility.</p>
            <Link to="/contact-us"><Button type="primary" size="large" className="carousel-button">Get Started</Button></Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide slide-2">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Tailored Marketing</h1>
            <p className="carousel-description">Innovative strategies to help you stand out.</p>
            <Link to="/contact-us"><Button type="primary" size="large" className="carousel-button">Learn More</Button></Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide slide-3">
          <div className="carousel-overlay">
            <h1 className="carousel-title">Your Partner in Success</h1>
            <p className="carousel-description">Committed to accelerating your business journey.</p>
            <Link to="/contact-us"><Button type="primary" size="large" className="carousel-button">Contact Us</Button></Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselEl;
