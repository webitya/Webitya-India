
import ContactUsPageEl from "../../Elements/ContactEl"
import LayoutEl from "../../Shared/Layout"
import { Helmet } from 'react-helmet';



const Contact=()=>{
    const display=(
        <>
        <Helmet>
        <title>Contact Us - Webitya Web Services</title>
        <meta name="description" content="Get in touch with us for any inquiries or support. We're here to help you." />
        <meta name="keywords" content="contact, email, phone, support, inquiries" />
      </Helmet>
         <LayoutEl>
          <ContactUsPageEl />
           
         </LayoutEl>
        </>
    )
    return display
}
export default Contact