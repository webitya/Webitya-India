import React from 'react';
import { 
  LaptopOutlined, 
  AppstoreAddOutlined, 
  SearchOutlined, 
  FundProjectionScreenOutlined, 
  MessageOutlined, 
  CommentOutlined, 
  MailOutlined, 
  ContactsOutlined 
} from '@ant-design/icons';
import 'antd/dist/reset.css'; // Import Ant Design CSS
import './AboutServicesEl.css'; // For custom styles

const services = [
  { title: 'Website Design & Web Development', description: 'Crafting responsive and visually appealing websites.', icon: <LaptopOutlined className="text-4xl" /> },
  { title: 'App Builder', description: 'Developing user-friendly mobile applications for all platforms.', icon: <AppstoreAddOutlined className="text-4xl" /> },
  { title: 'SEO', description: 'Enhancing your website’s visibility on search engines.', icon: <SearchOutlined className="text-4xl" /> },
  { title: 'Social Media Marketing', description: 'Boosting your brand’s presence on social media platforms.', icon: <FundProjectionScreenOutlined className="text-4xl" /> },
  { title: 'PPC', description: 'Creating effective pay-per-click advertising campaigns.', icon: <MessageOutlined className="text-4xl" /> },
  { title: 'Content Writing', description: 'Generating engaging and high-quality content for your audience.', icon: <CommentOutlined className="text-4xl" /> },
  { title: 'Email Marketing', description: 'Designing and executing impactful email marketing strategies.', icon: <MailOutlined className="text-4xl" /> },
  { title: 'Influencer Marketing', description: 'Partnering with influencers to enhance your brand’s reach.', icon: <ContactsOutlined className="text-4xl" /> },
  { title: 'Bulk SMS', description: 'Sending mass SMS campaigns to engage your audience.', icon: <FundProjectionScreenOutlined className="text-4xl" /> },
  { title: 'Software Development', description: 'Building custom software solutions tailored to your needs.', icon: <AppstoreAddOutlined className="text-4xl" /> },
  { title: 'Missed Call Service & IVR', description: 'Managing missed calls and interactive voice response systems.', icon: <MessageOutlined className="text-4xl" /> },
  { title: 'Logo & Brochure Design', description: 'Creating professional logos and brochures for your brand.', icon: <SearchOutlined className="text-4xl" /> },
  { title: 'WhatsApp Marketing', description: 'Leveraging WhatsApp for effective marketing campaigns.', icon: <MailOutlined className="text-4xl" /> },
  { title: 'E-Commerce Marketplace', description: 'Developing and managing online marketplaces.', icon: <FundProjectionScreenOutlined className="text-4xl" /> },
  { title: 'Branding Services', description: 'Enhancing your brand identity and market presence.', icon: <ContactsOutlined className="text-4xl" /> },
  { title: 'Local SEO', description: 'Optimizing your website for local search results.', icon: <FundProjectionScreenOutlined className="text-4xl" /> },
];

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        <p className="text-white text-lg">Explore our wide range of services designed to elevate your brand and achieve your business goals.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="service-icon bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
