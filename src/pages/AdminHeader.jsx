
import React from 'react'
import { Button } from 'react-bootstrap'

const AdminHeader = () => {
    return (
        <>
            <div style={{ height: '60px', width: '100%', cursor: 'pointer',justifyContent:'space-between' }} className="bg-white d-flex text-dark p-3 rounded shadow">
                <div><h3>AdminPanel</h3></div>
                <div><Button className='bg-black'>LogOut</Button></div>
            </div>
        </>
    )
}

export default AdminHeader