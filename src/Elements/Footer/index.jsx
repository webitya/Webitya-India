import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "./Footer.css";

const FooterEl = () => {
  return (
    <footer className='footer-section'>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 px-4">

          {/* Column 1: About Us */}
          <div className="footer-column mb-4">
            <h5 className='footer-title'>About Us</h5>
            <p className='footer-text'>
              At Webitya, we empower businesses through innovative web solutions and customized digital strategies, including SEO, social media marketing, and more.
            </p>
            <Link to="/about-us">
              <Button className='footer-button' type="primary" shape="round">Learn More</Button>
            </Link>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer-column mb-4">
            <h5 className='footer-title'>Our Services</h5>
            <ul className="footer-list">
              <li><Link to="/contact-us">Web Development</Link></li>
              <li><Link to="/contact-us">App Development</Link></li>
              <li><Link to="/contact-us">SEO</Link></li>
              <li><Link to="/contact-us">Social Media Marketing</Link></li>
              <li><Link to="/contact-us">PPC</Link></li>
              <li><Link to="/contact-us">Content Writing</Link></li>
              <li><Link to="/contact-us">Email Marketing</Link></li>
              <li><Link to="/contact-us">Influencer Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: More Services */}
          <div className="footer-column mb-4">
            <h5 className='footer-title'>More Services</h5>
            <ul className="footer-list">
              <li><Link to="/contact-us">Bulk SMS</Link></li>
              <li><Link to="/contact-us">IVR & Missed Call Service</Link></li>
              <li><Link to="/contact-us">Logo & Brochure Design</Link></li>
              <li><Link to="/contact-us">WhatsApp Marketing</Link></li>
              <li><Link to="/contact-us">E-Commerce Solutions</Link></li>
              <li><Link to="/contact-us">Branding Services</Link></li>
              <li><Link to="/contact-us">Software Development</Link></li>
              <li><Link to="/contact-us">Local SEO</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information & Social Links */}
          <div className="footer-column mb-4">
            <h5 className='footer-title'>Contact Information</h5>
            <p><strong>Address:</strong> Delhi India</p>
            <p><strong>Phone:</strong> +91 6207732383, 9693245941</p>
            <p><strong>Email:</strong> <a href="mailto:info@webitya.com">info@webitya.com</a></p>

            <h5 className='footer-title mt-4'>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/webitya" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
              <a href="https://x.com/webitya" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
              <a href="https://www.linkedin.com/company/webitya" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
              <a href="https://www.instagram.com/webitya" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
              <a href="https://www.youtube.com/@webitya" target="_blank" rel="noopener noreferrer"><YoutubeOutlined /></a>
            </div>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Webitya Web Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterEl;
