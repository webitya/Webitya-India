import React from 'react';
import { Form, Input, Button, message } from 'antd';
import emailjs from 'emailjs-com';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './HomeContactEl.css'; // Ensure you have custom styles for further fine-tuning

const HomeContactEl = () => {
  const handleSubmit = (values) => {
    emailjs.send('service_devwebitya', 'template_3cyp9eg', values, 'AruvncG9nxsgQJcnk')
      .then(() => {
        message.success('Message sent successfully!');
      })
      .catch(() => {
        message.error('Failed to send the message.');
      });
  };

  return (
    <div className="contact-page">
      {/* Top Banner */}
      <div className="banner">
        <div className="banner-content text-center">
          <h1 className="banner-title text-4xl text-white font-bold mb-4">Get in Touch</h1>
          <p className="banner-subtitle text-lg text-white">We’re here to assist you. Reach out to us with your questions or requests.</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="contact-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <MailOutlined className="icon text-3xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p><a href="mailto:info@webitya.com">webitya@gmail.com</a></p>
        </div>
        <div className="contact-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <EnvironmentOutlined className="icon text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-center">Delhi<br />INDIA</p>
        </div>
        <div className="contact-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <PhoneOutlined className="icon text-3xl text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p><a href="tel:+916209585437" >+91 6207732383</a></p>
          <p><a href="tel:+916203811003" >+91 9693245941</a></p>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="contact-section grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Map */}
        <div className="map bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.6573714063475!2d85.29893157466849!3d23.364424603485805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0f73c5f70c3%3A0x3e439d3f064943d2!2sKaram%20Chowk%2C%20Vidya%20Nagar%2C%20Kumhartoli%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1725717771659!5m2!1sen!2sin"
            title="Map Location"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Form */}
        <div className="form bg-white p-6 rounded-lg shadow-lg">
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="contact-form"
          >
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your full name!' }]}
            >
              <Input placeholder="Your Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input type="email" placeholder="Your Email" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: 'Please enter your phone number!' }]}
            >
              <Input placeholder="Your Phone Number" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="submit-button bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HomeContactEl;
