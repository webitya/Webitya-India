import CarouselEl from "../../Elements/CarouselEl"
import HomeAboutSection from "../../Elements/HomeAboutEl"
import HomeContactEl from "../../Elements/HomeContactEl"
import { Helmet } from 'react-helmet';
import HomeServiceDataEl from "../../Elements/HomeServiceDataEl"
import LayoutEl from "../../Shared/Layout"



const Home=()=>{
    const display=(
        <>
        <Helmet>
        <title>Home - Webitya Web Services</title>
        <meta name="description" content="Welcome to Your Company, offering top-tier services in web development, SEO, and digital marketing to help your business thrive." />
        <meta name="keywords" content="web development, SEO, digital marketing, business solutions, Your Company" />
        <meta name="author" content="Webitya Web Services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home - Your Webitya Web Services" />
        <meta property="og:description" content="Webitya Web Services offers industry-leading solutions in web development, SEO, and digital marketing to empower your business." />
        <meta property="og:url" content="https://webitya.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://webitya.in" />
      </Helmet>
         <LayoutEl>
            <CarouselEl />
            <HomeAboutSection />
            <HomeServiceDataEl />
            <HomeContactEl/>
         </LayoutEl>
        </>
    )
    return display
}
export default Home