import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, CalendarOutlined, MenuOutlined, PhoneOutlined, XOutlined, YoutubeOutlined, MailOutlined, BlockOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarEl.css";

const NavbarEl = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navBarStyle, setNavBarStyle] = useState("relative");

  const stickyNav = () => {
    if (window.scrollY > 200) {
      setNavBarStyle("fixed");
    } else {
      setNavBarStyle("relative");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyNav);
    return () => window.removeEventListener('scroll', stickyNav);
  }, []);

  return (
    <div className={`w-full px-3 okokok py-2 bg-white shadow-lg ${navBarStyle}`}>
      <div className="flex justify-between items-center">
        <div className="block lg:hidden">
          <Link to="/">
            <img src="/logo1.svg" width="100px" />
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link to="/">
            <img src="/logo1.svg" width="80px" />
          </Link>
        </div>

        <div className="hidden lg:flex gap-4 items-center text-zinc-700">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="https://calendly.com/dev-webitya">
            <Button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
              icon={<CalendarOutlined />}
            >
              Book Appointment
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MenuOutlined className="text-xl cursor-pointer" onClick={() => setOpenMenu(true)} />
        </div>

        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} closable>
          <div className="py-2 text-center">
            <img src="/logo1.svg" width="120px" />
          </div>
          <div className="drawerNav">
            <ul>
              <li onClick={() => setOpenMenu(false)}><Link to="/">Home</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/about-us">About Us</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/services">Services</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/contact-us">Contact Us</Link></li>
              <li>
                <Link to="https://calendly.com/dev-webitya">
                  <Button
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
                    icon={<CalendarOutlined />}
                  >
                    Book Appointment
                  </Button>
                </Link>
              </li>
              <li className="flex gap-2 justify-center">
                <Link to="https://www.instagram.com/brightnet_ads_media"><Button className="text-pink-500"><InstagramOutlined /></Button></Link>
                <Link to="https://x.com/Brightnetads"><Button className="text-black"><XOutlined /></Button></Link>
                <Link to="https://www.linkedin.com/company/brightnet-ads-media/"><Button className="text-blue-400"><LinkedinOutlined /></Button></Link>
                <Link to="https://www.youtube.com/@BRIGHTNETADSMEDIA"><Button className="text-red-600"><YoutubeOutlined /></Button></Link>
                <Link to="https://www.facebook.com/profile.php?id=61565595419734"><Button className="text-blue-700"><FacebookOutlined /></Button></Link>
              </li>
              <li>
                <h1><b><PhoneOutlined className="text-green-900"/> Phone: </b><span>+91 6209585437</span></h1>
              </li>
              <li>
                <h1><b><MailOutlined className="text-blue-700"/> Email: </b><span>brightnetmedia@gmail.com</span></h1>
              </li>
              <li>
                <h1><b><BlockOutlined className="text-red-500"/> Address: </b><span>Karam Chowk Harmu Ranchi, Ranchi Jharkhand</span></h1>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default NavbarEl;
