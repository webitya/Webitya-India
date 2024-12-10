import React from "react";
import { Form, Input, Button, Select, message } from "antd";
import emailjs from "emailjs-com";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import "./ContactEl.css";

const { Option } = Select;

const ContactUs = () => {
  const handleSubmit = (values) => {
    emailjs
    // ('service_devwebitya', 'template_3cyp9eg', values, 'AruvncG9nxsgQJcnk')
      .send("service_devwebitya", "template_3cyp9eg", values, "AruvncG9nxsgQJcnk")
      .then(() => {
        message.success("Message sent successfully!");
      })
      .catch(() => {
        message.error("Failed to send the message.");
      });
  };

  return (
    <div className="contact-us">
      <div className="banner">
        <div className="banner-content text-center">
          <h1 className="banner-title text-4xl text-white font-bold mb-4">Connect with Webitya</h1>
          <p className="banner-subtitle text-lg text-white">We're here for any inquiries or support you need!</p>
        </div>
      </div>

      <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="contact-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <MailOutlined className="icon text-3xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p><a href="mailto:info@webitya.com">webitya@gmail.com</a></p>
        </div>
        <div className="contact-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <EnvironmentOutlined className="icon text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-center">Delhi India</p>
        </div>
        <div className="contact-card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <PhoneOutlined className="icon text-3xl text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p><a href="tel:+911234567890">+91 9693245941</a></p>
        </div>
      </div>

      <div className="contact-section grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="map bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            title="Map Location"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="form bg-white p-6 rounded-lg shadow-lg">
          <Form layout="vertical" onFinish={handleSubmit} className="contact-form">
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email!" }]}>
              <Input type="email" placeholder="Your Email" />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Please enter your phone number!" }]}>
              <Input placeholder="Your Phone Number" />
            </Form.Item>
            <Form.Item name="service" label="Service Interested" rules={[{ required: true, message: "Please select a service!" }]}>
              <Select placeholder="Select a service">
                <Option value="website-design">Website Design</Option>
                <Option value="seo">SEO</Option>
                <Option value="social-media">Social Media Marketing</Option>
                <Option value="content-writing">Content Writing</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message!" }]}>
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold transition duration-300"
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

export default ContactUs;
