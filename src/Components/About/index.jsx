import AboutEl from "../../Elements/AboutEl"
import LayoutEl from "../../Shared/Layout"
import { Helmet } from 'react-helmet';


const About=()=>{
    const display=(
        <>
        <Helmet>
        <title>About Us - Webitya Web Services</title>
        <meta name="description" content="Learn More About-Us, Our Services , Testimonials" />
        <meta name="keywords" content="about us, Website-Designing, Our-Services" />
        </Helmet>
         <LayoutEl>
            <AboutEl />
         </LayoutEl>
        </>
    )
    return display
}
export default About