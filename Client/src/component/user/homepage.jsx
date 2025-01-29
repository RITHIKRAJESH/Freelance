import Adminviewdev from "../viewdev";
import Backgroundslide from "./backgroundslide";
import Footer from "./footer";
import Middle from "./middle";
import Slider from "./slider";
import Webheader from "./webheader";
import './webheader.css'
export default function Homepage()
{
    return(
        <>
        <Webheader/><br></br><br></br>
        <Backgroundslide>
        <Slider/>
        </Backgroundslide>
       <Adminviewdev/>
        <Middle/>
        <Footer/>
        </>
    )
}