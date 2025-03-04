import React from 'react'
import SideBar from './SideBar'
import AdminMenCard from '../components/AdminMenCard'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'


const AdminMen = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
            <AdminHeader />
                <div className='d-flex' style={{ width: '100%' }}>
                    <SideBar />
                    <div style={{ position: 'fixed', top: '80px', right: '20px' }}>
                        <Link style={{ marginTop: '10px', marginRight: '30px',backgroundColor:'blue',color:'white' }} to="/admin/men/add" className='btn'>Add New Product</Link>
                    </div>
                    <div className='d-flex' style={{marginLeft:'20px',marginTop:'100px',width:'100%',flexWrap:'wrap',gap:'10px'}}>
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                        <AdminMenCard />
                    </div>
                </div>

                {/* Admin Men card */}


            </div>
        </>
    )
}

export default AdminMen