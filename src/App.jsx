
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import ForgotePassword from './pages/ForgotePassword'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import Women from './pages/Women'
// import Header from './components/Header'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'

function App() {

  return (
    <>
      {/* <Header insideLogin={true}/> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insiderRegister={true} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/forgotePassword' element={<ForgotePassword />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/men' element={<Men />} />
        <Route path='/pnf' element={<Pnf />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/women' element={<Women />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
