import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// Lazy load the components
const Login = lazy(() => import('./component/user/Login'));
const User_registration = lazy(() => import('./component/user/userreg'));
const Client_reg = lazy(() => import('./component/user/clientreg'));
const Admin = lazy(() => import('./component/user/admin'));
const Addproducte = lazy(() => import('./component/user/addproducts'));
const Msg = lazy(() => import('./component/user/emp'));
const Employeeview = lazy(() => import('./component/user/employeeview'));
const Productview = lazy(() => import('./component/user/productview'));
const Profile = lazy(() => import('./component/user/profile'));
const Empheader = lazy(() => import('./component/user/emphead'));
const Emppage = lazy(() => import('./component/user/emppage'));
const Usersearch = lazy(() => import('./component/user/usersearch'));
const Devexp = lazy(() => import('./component/user/devexp'));
const Exprofile = lazy(() => import('./component/user/exprofile'));
const Homepage = lazy(() => import('./component/user/homepage'));
const Clientlogin = lazy(() => import('./component/user/clientlogin'));
const Clienthome = lazy(() => import('./component/user/clienthome'));
const Clientheader = lazy(() => import('./component/user/clientheader'));
const Clientprofile = lazy(() => import('./component/user/clientprofile'));
const Clientrequirement = lazy(() => import('./component/user/clientrequirement'));
const Clientreqview = lazy(() => import('./component/user/clientreqview'));
const Viewdev = lazy(() => import('./component/user/viewdev'));
const ViewCli = lazy(() => import('./component/user/viewclient'));
const ClientAgree = lazy(() => import('./component/user/clientagree'));
const Adminregister = lazy(() => import('./component/admin/adminreg'));
const Adminlogin = lazy(() => import('./component/admin/adminlogin'));
const Adminhome = lazy(() => import('./component/admin/adminhome'));
const Adminheader = lazy(() => import('./component/admin/adminheader'));
const Adminviewdev = lazy(() => import('./component/admin/adminviewdev'));
const Adminviewcli = lazy(() => import('./component/admin/adminviewclien'));
const Viewproject = lazy(() => import('./component/admin/adminviewproject'));
const ViewAgree = lazy(() => import('./component/admin/viewagree'));
const Viewstatus = lazy(() => import('./component/user/clientviewstatus'));
const Pay = lazy(() => import('./component/user/pay'));
const Feedback = lazy(() => import('./component/user/clifeedbk'));
const Complaint = lazy(() => import('./component/user/clicmp'));
const Categoryreg = lazy(() => import('./component/admin/categoryreg'));



// Lazy load the components with Suspense wrapper
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/userreg" element={<User_registration />} />
        <Route path="/clientreg" element={<Client_reg />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addproducts" element={<Addproducte />} />
        <Route path="/emp/*" element={<Msg />} />
        <Route path="/employeeview" element={<Employeeview />} />
        <Route path="/productview" element={<Productview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/emphead" element={<Empheader />} />
        <Route path="/emppage/*" element={<Emppage />} />
        <Route path="/usersearch" element={<Usersearch />} />
        <Route path="/devexp" element={<Devexp />} />
        <Route path="/exprofile" element={<Exprofile />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/clientlogin" element={<Clientlogin />} />
        <Route path="/clienthome/*" element={<Clienthome />} />
        <Route path="/clientheader" element={<Clientheader />} />
        <Route path="/clientprofile" element={<Clientprofile />} />
        <Route path="/clientrequirement" element={<Clientrequirement />} />
        <Route path="/clientreqview" element={<Clientreqview />} />
        <Route path="/viewdev" element={<Viewdev />} />
        <Route path="/viewclient" element={<ViewCli />} />
        <Route path="/clientagree/:devid" element={<ClientAgree />} />
        <Route path="/adminreg" element={<Adminregister />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/adminhome/*" element={<Adminhome />} />
        <Route path="/adminheader" element={<Adminheader />} />
        <Route path="/adminviewdev" element={<Adminviewdev />} />
        <Route path="/adminviewclien" element={<Adminviewcli />} />
        <Route path="/adminviewproject" element={<Viewproject />} />
        <Route path="/viewagree" element={<ViewAgree />} />
        <Route path="/clientviewstatus" element={<Viewstatus />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/clifeedbk" element={<Feedback />} />
        <Route path="/clicmp" element={<Complaint />} />
        <Route path="/categoryadd" element={<Categoryreg />} />
      </Routes>
    </Suspense>
  );
}

export default App;
