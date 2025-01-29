
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import ViewAgree from './viewagree';
// import CloseButton from 'react-bootstrap/CloseButton';
// function Adminhome() {
//   return (
    
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Welcome Admin</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="adminviewdev">View Developer</Nav.Link>
//             <Nav.Link href="adminviewclien">View Clients</Nav.Link>
//             <Nav.Link href="adminviewproject">View Project</Nav.Link>
//             <Nav.Link href="/categoryadd">Add Category</Nav.Link>

//             <Nav.Link href="/">Logout</Nav.Link>
           
         
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             /><br></br>
//             <Button variant="outline-success">Search</Button>
//           </Form><br></br>
//           <CloseButton />
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
//   );
// }
// //<ViewAgree/>
// export default Adminhome;

import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { Link, Routes,Route } from 'react-router-dom';
import { HomeOutlined, UserOutlined, TeamOutlined, ProjectOutlined, PlusOutlined } from '@ant-design/icons';
import ViewAgree from './viewagree';
import Adminviewdev from './adminviewdev';
import Adminviewcli from './adminviewclien';
import Viewproject from './adminviewproject';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function Adminhome() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/adminhome">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/adminhome/adminviewdev">View Developer</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link to="/adminhome/adminviewclien">View Clients</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ProjectOutlined />}>
            <Link to="/adminhome/adminviewproject">View Project</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<PlusOutlined />}>
            <Link to="/adminhome/categoryadd">Add Category</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<PlusOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ padding: '0 16px' }}>
            <Title level={3} style={{ color: '#fff', margin: 0 }}>Admin</Title>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <Routes>
          <Route path="/adminviewdev" element={<Adminviewdev/>}></Route>
          <Route path="/adminviewclien" element={<Adminviewcli/>}></Route>
          <Route path="/adminviewproject" element={<Viewproject/>}></Route>   
          <Route path="/categoryadd" element={<Viewproject/>}></Route> 
          </Routes>
          <ViewAgree />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Adminhome;
