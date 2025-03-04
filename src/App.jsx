import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from "./pages/Auth";
import Cart from './pages/Cart'
import ForgotePassword from './pages/ForgotePassword'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Wishlist from './pages/Wishlist'
import Women from './pages/Women'
import Footer from './components/Footer'
// import Register from './pages/Register'
import Pnf from './pages/Pnf'
import Profile from './components/Profile'
import ProfileEdit from './pages/ProfileEdit'
import SideBar from './pages/SideBar'
import AdminHeader from './pages/AdminHeader'
import AdminMen from './pages/AdminMen'
import AdminMenAdd from './pages/AdminMenAdd'
import AdminWomen from './pages/AdminWomen'
import AdminWomenAdd from './pages/AdminWomenAdd'
import AdminKid from './pages/AdminKid'
import AdminKidsAdd from './pages/AdminKidsAdd'
import Others from './pages/Others'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true}/>} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgotePassword" element={<ForgotePassword />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men" element={<Men />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/women" element={<Women />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        
        {/* Admin Routes */}
        <Route path="/admin/sidebar" element={<SideBar />} />
        <Route path="/admin/men" element={<AdminMen />} />
        <Route path="/admin/men/add" element={<AdminMenAdd />} />
        <Route path="/admin/women" element={<AdminWomen />} />
        <Route path="/admin/women/add" element={<AdminWomenAdd />} />
        <Route path="/admin/kids" element={<AdminKid />} />
        <Route path="/admin/kids/add" element={<AdminKidsAdd />} />
        <Route path="/admin/others" element={<Others />} />

        {/* 404 Page */}
        <Route path="*" element={<Pnf />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
