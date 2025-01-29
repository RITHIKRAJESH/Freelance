// import Empheader from './emphead'
// import Profile from './profile'
// import { Container, Row, Col, Nav } from "react-bootstrap";
// import { Route, Routes } from "react-router-dom";
// import Employeeview from "./employeeview";
// //import './emppage.css';
// import './emp.css';
// import Devexp from './devexp';
// import Exprofile from './exprofile';
// import ViewCli from './viewclient';
// import ViewAgree from '../admin/viewagree';
// import Feedback from './clifeedbk';
// import Complaint from './clicmp';

// export default function Msg() {
    
//     const userid = sessionStorage.getItem("userid")
//     const username = sessionStorage.getItem("username")
//     const phone = sessionStorage.getItem("phone")
//     const address = sessionStorage.getItem("address")

//     return (
//         <>
//             <Empheader /> 
            
//             <Container fluid className="main-container">
            
//                 <Row>
//                     <Col lg={2}>
                       
//                         <Nav defaultActiveKey="/home" className="flex-column"><br></br>
//                             <Nav.Link href="/emp" style={{ color: 'white' }}>Home</Nav.Link>
//                             <Nav.Link href="/emp/profile"style={{ color: 'white' }}>profile</Nav.Link>
//                             <Nav.Link href="/emp/devexp"style={{ color: 'white' }}>Add Experience</Nav.Link>
//                             <Nav.Link href="/emp/exprofile"style={{ color: 'white' }}>View Experience</Nav.Link>
//                             {/* <Nav.Link href="/emp/viewclient"style={{ color: 'white' }}>View Client</Nav.Link> */}
//                             {/* <Nav.Link href="/emppage/add-feedback"style={{ color: 'white' }}>Make Agreement</Nav.Link> */}
//                             <Nav.Link href="/emp/viewagree"style={{ color: 'white' }}>View Project</Nav.Link>
//                             <Nav.Link href="/emp/viewagree"style={{ color: 'white' }}>Update Status</Nav.Link>
//                             <Nav.Link href="/emp/clifeedbk"style={{ color: 'white' }}>Add Feedback</Nav.Link>
//                             <Nav.Link href="/emp/clicmp"style={{ color: 'white' }}>Add Complaint</Nav.Link>
//                             <Nav.Link href="/" style={{ color: 'white' }} className='nav-link:hover'>Logout</Nav.Link>
                            
//                         </Nav>
//                     </Col>
//                     <Col lg={10}>
//                         <Routes>
//                             <Route path="/profile" element={<Profile />} />
//                             <Route path="/devexp" element={<Devexp />} />
//                             <Route path="/exprofile" element={<Exprofile/>}/>
//                             <Route path="/viewclient" element={<ViewCli/>}/>
//                             <Route path="/viewagree" element={<ViewAgree/>}/>
//                             <Route path="/clifeedbk" element={<Feedback/>}/>
//                              <Route path="/clicmp" element={<Complaint/>}/>
//                         </Routes>
//                     </Col>
//                 </Row>
                
//             </Container>
//         </>
//     )
// }
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    IdcardOutlined,
    PlusOutlined,
    UnorderedListOutlined,
    FileSearchOutlined,
    CommentOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Route, Routes } from 'react-router-dom';
import Empheader from './emphead';
import Profile from './profile';
import Employeeview from './employeeview';
import Devexp from './devexp';
import Exprofile from './exprofile';
import ViewCli from './viewclient';
import ViewAgree from '../admin/viewagree';
import Feedback from './clifeedbk';
import Complaint from './clicmp';

const { Header, Sider, Content } = Layout;

export default function Msg() {
    const [collapsed, setCollapsed] = useState(false);
    const username = sessionStorage.getItem("username");

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}> 
            <Sider collapsible collapsed={collapsed} onCollapse={toggle} style={{backgroundColor:'#90EE90'}}>
                <div className="logo" />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor:'#90EE90'}}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <a href="/emp/profile">
                        Profile
                        </a>
                        
                    </Menu.Item>
                    <Menu.Item key="2" icon={<IdcardOutlined />}>
                    <a href="/emp/devexp">
                        Add Experience
                        </a>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PlusOutlined />}>
                    <a href="/emp/exprofile">
                        View Experience
                        </a>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UnorderedListOutlined />}>
                    <a href="/emp/viewclient">
                        View Client
                        </a>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FileSearchOutlined />}>
                    <a href="/emp/viewagree">
                        View Project
                        </a>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<CommentOutlined />}>
                    <a href="/emp/clifeedbk">
                        Add Feedback
                        </a>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<LogoutOutlined />}>
                    <a href="/">
                        Logout
                        </a>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 ,backgroundColor:'#90EE90'}}>
                    {/* <Empheader /> */}
                    <h3>Welcome, {username}</h3> 
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/devexp" element={<Devexp />} />
                            <Route path="/exprofile" element={<Exprofile />} />
                            <Route path="/viewclient" element={<ViewCli />} />
                            <Route path="/viewagree" element={<ViewAgree />} />
                            <Route path="/clifeedbk" element={<Feedback />} />
                            <Route path="/clicmp" element={<Complaint />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

