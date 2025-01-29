// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './webheader.css';
// import img4 from './dev.jpg'
// import img5 from './cl.jpg'
// import { Link } from 'react-router-dom';

// function Webheader() {
//   return (
//     <>


//       <Navbar expand="lg" className="bg-secondary">
//         <Container>
//           <Navbar.Brand href="/" style={{ fontSize: '28px' }}><i><b>Freelancer-Project-Completer</b></i></Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/" style={{ fontSize: '20px' }}>About</Nav.Link>
//               <Nav.Link href="/" style={{ fontSize: '20px' }}>Home</Nav.Link>
//               {/* <Nav.Link href="adminreg">Admin reg</Nav.Link> */}
//               {/* <Nav.Link href="adminlogin">Admin login</Nav.Link> */}
//               <NavDropdown title="Regisration"  id="basic-nav-dropdown" style={{ fontSize: '20px',color: 'white' }}>
//                 {/* <NavDropdown.Item href="clientreg">Admin Registration</NavDropdown.Item> */}
//                 <NavDropdown.Item href="clientreg">Client Registration</NavDropdown.Item>
//                 <NavDropdown.Item href="userreg">Developer Registration</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title="Login" style={{ fontSize: '20px' ,color: 'white'}}id="basic-nav-dropdown">
//                 <NavDropdown.Item href="adminlogin">Admin Login</NavDropdown.Item>
//                 <NavDropdown.Item href="clientlogin">Client Login</NavDropdown.Item>
//                 <NavDropdown.Item href="login">Developer Login</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
      
//       <div className="header-image">
//   <Navbar expand="lg" className="bg-secondary">
//     {/* Navbar content */}
//   </Navbar>
//   {/* Other header content */}
//   {/* <div className='im'>
//   <a href="login">
//             <img src={img4} style={{width:'200px',height:'100px'}} />
//             <p className='t'>Developer</p>
//         </a>
//         <a href="clientlogin">
//             <img src={img5} style={{width:'200px',height:'100px'}} />
//             <p className='t'>Client</p>
//         </a></div> */}
// </div>


//     </>
//   );
// }

// export default Webheader;

import { useState } from 'react'

import free from '../images/freelance.png'
import './webheader.css'

export default function Webheader() {
const[dropmenu,setMenu]=useState("dropm")
const [toggle,setToggle]=useState(false)
function dropdown(){
   if(!toggle){
    setMenu("dropmove")
    setToggle(true)
   }
   else{
    setMenu("dropm")
    setToggle(false)
   }
  
}
  return (
    <>
     <div className="header">
      <div className="logo">
      <img src={free} alt="" srcset="" />
      <h3>FreeLancer</h3>
      </div>
      <div className="naves">
        <p>
          <a href=""><i class="fa-solid fa-house"></i>Home</a>
        </p>
        <p>
          <a href=""><i class="fa-solid fa-gear"></i>Aboutus</a>
        </p>
        <p>
          <a href=""><i class="fa-duotone fa-solid fa-id-badge"></i>Contactus</a>
        </p>
      </div>
      <div className="social">
           <p><a href=""><i class="fa-brands fa-facebook"></i></a></p>
           <p><a href=""><i class="fa-brands fa-linkedin"></i></a></p>
      
           <p><a href=""></a></p>
      </div>
      <div className="burger">
      <i class="fa-solid fa-list" onClick={dropdown}></i>
      </div>
     </div>
     <div className={dropmenu}>
     <p>
          <a href=""><i class="fa-solid fa-house"></i>&nbsp;Home</a>
        </p>
        <p>
          <a href=""><i class="fa-solid fa-gear"></i>&nbsp;Aboutus</a>
        </p>
        <p>
          <a href=""><i class="fa-duotone fa-solid fa-id-badge"></i>&nbsp;Contactus</a>
        </p>
     </div>
    </>
  )
}