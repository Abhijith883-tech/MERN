import React from 'react'
import SideBar from './SideBar'
import { Button } from 'react-bootstrap'
import AdminMenCard from '../components/AdminMenCard'
import { Link } from 'react-router-dom'
import AdminWomenCard from '../components/AdminWomenCard'
import AdminHeader from './AdminHeader'
const AdminWomen = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <AdminHeader />
        <div className='d-flex' style={{ width: '100%' }}>
          <SideBar />
          <div style={{ position: 'fixed', top: '80px', right: '20px' }}>
            <Link style={{ marginTop: '10px', marginRight: '30px', backgroundColor: 'blue', color: 'white' }} to="/AdminMenAdd" className='btn'>Add New Product</Link>
          </div>
          <div className='d-flex' style={{ marginLeft: '20px', marginTop: '100px', width: '100%', flexWrap: 'wrap', gap: '10px' }}>
            {/* Admin Women card */}
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
            <AdminWomenCard />
          </div>
        </div>




      </div>
    </>
  )
}

export default AdminWomen