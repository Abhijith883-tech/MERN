import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>
            <div style={{ height: '400px', width: '250px', marginTop: '5px', marginLeft: '10px' }} className="bg-white text-dark p-3 rounded shadow">
                <Link to={'/admin/dashboard'} style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                    Dashboard
                    </div>
                </Link>
                <Link to={'/admin/men'} style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Men
                    </div>
                </Link>
                <Link to={'/admin/women'} style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Women
                    </div>
                </Link>
                <Link to={'/admin/kids'} style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Kids
                    </div>
                </Link>
                <Link to={'/Others'} style={{ textDecoration: 'none', color: 'black' }}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Others
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SideBar