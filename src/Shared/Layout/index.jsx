import FooterEl from "../../Elements/Footer"
import NavbarEl from "../../Elements/NavbarEl"


const LayoutEl=(data)=>{
    const display=(
        <>
          <NavbarEl />
          {data.children}
          <FooterEl />
        </>
    )
    return display
}
export default LayoutEl