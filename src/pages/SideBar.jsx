import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>
            <div style={{ height: '400px', width: '250px', marginTop: '5px', marginLeft: '10px' }} className="bg-white text-dark p-3 rounded shadow">
                <div style={{ height: '50px', width: '100%', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                    <Link style={{ textDecoration: 'none', color: 'black' }}>DashBoard</Link>
                </div>
                <Link to={'/AdminMen'} style={{textDecoration:'none',color:'black'}}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Men
                    </div>
                </Link>
                <Link to={'/AdminWomen'} style={{textDecoration:'none',color:'black'}}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Women
                    </div>
                </Link>
                <Link to={'/AdminKid'} style={{textDecoration:'none',color:'black'}}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Kids
                    </div>
                </Link>
                <Link to={'/Others'} style={{textDecoration:'none',color:'black'}}>
                    <div style={{ height: '50px', width: '100%', marginTop: '20px', cursor: 'pointer' }} className="bg-white text-dark p-3 rounded shadow">
                        Others
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SideBar