import React from 'react';
import { Card, Button, Typography } from 'antd';
import { 
    DesktopOutlined,
    MobileOutlined,
    SearchOutlined,
    ShareAltOutlined,
    MoneyCollectOutlined,
    FileTextOutlined,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
    HddOutlined,
    SettingOutlined,
    ArrowRightOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
    FileSearchOutlined,
    ShopOutlined,
    FundProjectionScreenOutlined,
} from '@ant-design/icons'; 
import 'antd/dist/reset.css';
import "./HomeServiceDataEl.css"
import { Link } from 'react-router-dom';
const { Title, Paragraph } = Typography;

const servicesData = [
    {
      title: 'Web Development',
      description: 'Create and maintain websites with cutting-edge technology and best practices.',
      icon: <DesktopOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    },
    {
      title: 'App Development',
      description: 'Develop custom mobile applications tailored to your business needs.',
      icon: <MobileOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Improve your online presence and drive traffic through SEO and effective digital marketing strategies.',
      icon: <SearchOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Set up and manage your online store to boost sales and reach a global market.',
      icon: <ShopOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
    },
    {
      title: 'Content Creation',
      description: 'Create engaging and informative content that resonates with your audience.',
      icon: <FileTextOutlined style={{ fontSize: '32px', color: '#13c2c2' }} />,
    },
    {
      title: 'Branding & Design',
      description: 'Build a strong brand identity with our creative branding and design services.',
      icon: <FundProjectionScreenOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
    },
    {
      title: 'Social Media Management',
      description: 'Enhance your brand’s presence across various social media platforms.',
      icon: <ShareAltOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />,
    },
    {
      title: 'Email Marketing',
      description: 'Reach your audience directly with personalized and impactful email campaigns.',
      icon: <MailOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    },
];

const HomeServiceDataEl = () => {
  return (
    <div className="px-4 py-12 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <Title level={2} className="text-4xl font-bold text-gray-800 mb-6">
          Our Services
        </Title>
        <Paragraph className="text-lg text-gray-600 mb-8">
          Explore our range of services designed to help you succeed in the digital world.
        </Paragraph>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl transition-shadow duration-300"
            title={service.icon}
            bordered={false}
            bodyStyle={{ padding: '20px' }}
          >
            <Title level={4} className="text-gray-800 mb-2">
              {service.title}
            </Title>
            <Paragraph className="text-gray-600 mb-4">
              {service.description}
            </Paragraph>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/contact-us">
        <Button 
          type="primary" 
          size="large" 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
          icon={<ArrowRightOutlined />}
        >
          Contact Us
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServiceDataEl;
