import ServicesPage from "../../Elements/HomeServicesEl"
import LayoutEl from "../../Shared/Layout"
import { Helmet } from 'react-helmet';


const Services=()=>{
    const display=(
        <>
        <Helmet>
        <title>Services - Webitya Web Services</title>
        <meta name="description" content="Discover our wide range of services including web development, SEO, and marketing solutions." />
        <meta name="keywords" content="services, web development, SEO, marketing, business solutions" />
         </Helmet>
          <LayoutEl>
          <ServicesPage />
          </LayoutEl>
        </>
    )
    return display
}
export default Services