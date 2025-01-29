import logo from './assets/logo.svg'
import './App.css';
import Userreg from './component/user/userreg';
import Login from './component/user/Login';
import Signin from './component/user/signin';
import Webheader from './component/user/webheader';
import { Route, Routes } from 'react-router-dom';
import User_registration from './component/user/userreg';
import Client_reg from './component/user/clientreg';
import Admin from './component/user/admin';
import Addproducte from './component/user/addproducts';
import Msg from './component/user/emp';
import Employeeview from './component/user/employeeview';
import Productview from './component/user/productview';
import Profile from './component/user/profile';
import Empheader from './component/user/emphead';
import Emppage from './component/user/emppage';
import Usersearch from './component/user/usersearch';
import Devexp from './component/user/devexp';
import { MdOutlineImageAspectRatio } from 'react-icons/md';
import Exprofile from './component/user/exprofile';
import Slider from './component/user/slider';
import Homepage from './component/user/homepage';
import Clientlogin from './component/user/clientlogin';
import Clienthome from './component/user/clienthome';
import Clientheader from './component/user/clientheader';
import Clientprofile from './component/user/clientprofile';
import Clientrequirement from './component/user/clientrequirement';
import Clientreqview from './component/user/clientreqview';
import Viewdev from './component/user/viewdev';
import ViewCli from './component/user/viewclient';
import ClientAgree from './component/user/clientagree';
import Adminregister from './component/admin/adminreg';
import Adminlogin from './component/admin/adminlogin';
import Adminhome from './component/admin/adminhome';

import Adminviewdev from './component/admin/adminviewdev';
import Adminviewcli from './component/admin/adminviewclien';
import Viewproject from './component/admin/adminviewproject';
import ViewAgree from './component/admin/viewagree';
import Viewstatus from './component/user/clientviewstatus';
import Pay from './component/user/pay';
import Feedback from './component/user/clifeedbk';
import Complaint from './component/user/clicmp';
import Categoryreg from './component/admin/categoryreg';


function App() {
  return (
  <Routes>
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/userreg" element={<User_registration/>}/>
    <Route path="/clientreg" element={<Client_reg/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/addproducts" element={<Addproducte/>}/>
    <Route path="/emp/*" element={<Msg/>}/>
    <Route path="/employeeview" element={<Employeeview/>}/>
    <Route path="/productview" element={<Productview/>}/>
    <Route pah="/profile" element={<Profile/>}/>
    <Route path="/emphead" element={<Empheader/>}/>
    <Route path="/emppage/*" element={<Emppage/>}/>
    <Route path="/usersearch" element={<Usersearch/>}/>
    <Route path="/devexp" element={<Devexp/>}/>
    <Route path="/exprofile" element={<Exprofile/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/clientlogin' element={<Clientlogin/>}/>
    <Route path='/clienthome/*' element={<Clienthome/>}/>
    <Route path='/clientheader' element={<Clientheader/>}/>
    <Route path='/clientprofile' element={<Clientprofile/>}/>
    <Route path='/clientrequirement' element={<Clientrequirement/>}/>
    <Route path='/clientreqview' element={<Clientreqview/>}/>
    <Route path='/viewdev' element={<Viewdev/>}/>
    <Route path='/viewclient' element={<ViewCli/>}/>
    <Route path='/clientagree/:devid' element={<ClientAgree/>}/>
    <Route path='/adminreg' element={<Adminregister/>}/>
    <Route path='/adminlogin' element={<Adminlogin/>}/>
    <Route path='/adminhome/*' element={<Adminhome/>}/>
    {/* <Route path='/adminheader' element={<Adminh/>}/> */}
    <Route path='/adminviewdev' element={<Adminviewdev/>}/>
    <Route path='/adminviewclien' element={<Adminviewcli/>}/>
    <Route path='/adminviewproject' element={<Viewproject/>}/>
    <Route path='/viewagree' element={<ViewAgree/>}/>
    <Route path='/clientviewstatus' element={<Viewstatus/>}/>
    <Route path='/pay' element={<Pay/>}/>
    <Route path='/clifeedbk' element={<Feedback/>}/>
    <Route path='/clicmp' element={<Complaint/>}/>
    <Route path="/categoryadd" element={<Categoryreg/>}></Route>
  </Routes>
  
  );
}

export default App;
