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

import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

function Webheader() {
  return (
    <Layout>
      <Header className="bg-secondary">
      
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <span className='titlestyle' style={{fontSize:'35px'}}>Freelancer-Project-Completer</span>{"     "}
          <Menu.Item key="1" icon={<UserOutlined />} style={{ fontSize: '20px' }}>
            About
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />} style={{ fontSize: '20px' }}>
            Home
          </Menu.Item>
          <Menu.SubMenu key="3" icon={<UserAddOutlined />} title="Registration" style={{ fontSize: '20px' }}>
            <Menu.Item key="clientreg" href='/cleintreg'>
              <a href="/clientreg">Client Registration</a>
              </Menu.Item>
            <Menu.Item key="userreg" >
            <a href="/userreg">Developer Registration</a>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="4" icon={<LoginOutlined />} title="Login" style={{ fontSize: '20px' }}>
            
            <Menu.Item key="clientlogin">
              <Link to="/clientlogin">
              Client Login
              </Link>
          
              
              </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">
              Developer Login
                </Link>
                
                </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      {/* Content */}
    </Layout>
  );
}

export default Webheader;
