import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import SideBar from './SideBar'
import AvatharProfile from '../assets/AvatharProfile.jpg'
import SalesChart from '../components/SalesChart'
import { Link } from 'react-router-dom'
import { KidCountAPI, MenCountAPI, WomenCountAPI, UserCountAPI } from '../services/allAPI'

const AdminDashboard = () => {
    const [salesData, setSalesData] = useState([])
    const [men, menCount] = useState([])
    const [women, womenCount] = useState([])
    const [kid, kidCount] = useState([])
    const [user, userCount] = useState([])
    console.log(men);

    useEffect(() => {
        const fetchMen = async () => {
            try {
                const result = await MenCountAPI()
                const Women = await WomenCountAPI()
                const Kid = await KidCountAPI()
                const user = await UserCountAPI()

                console.log(result);
                menCount(result.data)
                womenCount(Women.data)
                kidCount(Kid.data)
                userCount(user.data)
            } catch (error) {
                console.log(error);

            }

        }
        fetchMen()
    }, [])
    return (
        <>
            <div style={{ position: 'relative' }}>
                <AdminHeader />
                <div className='d-flex' style={{ width: '100%' }}>
                    <SideBar />
                    <div className='d-flex' style={{ flexWrap: 'wrap' }}>
                        <div style={{ height: '130px', width: '130px', marginTop: '50px', marginLeft: '50px', marginBottom: '40px' }} className="bg-white text-dark p-3 rounded shadow">

                            <h4>Users</h4>
                            <p>{user.count}</p>

                        </div>
                        <div style={{ height: '130px', width: '130px', marginTop: '50px', marginLeft: '50px', marginBottom: '40px', textAlign: 'center' }} className="bg-white text-dark p-3 rounded shadow">

                            <h4>Men</h4>
                            <p>{men.count}</p>

                        </div>
                        <div style={{ height: '130px', width: '130px', marginTop: '50px', marginLeft: '50px', marginBottom: '40px', textAlign: 'center' }} className="bg-white text-dark p-3 rounded shadow">

                            <h4> Women</h4>
                            <p>{women.count}</p>

                        </div>
                        <div style={{ height: '130px', width: '130px', marginTop: '50px', marginLeft: '50px', marginBottom: '40px', textAlign: 'center' }} className="bg-white text-dark p-3 rounded shadow">

                            <h4>Kid</h4>
                            <p>{kid.count}</p>

                        </div>
                        <div style={{ position: 'fixed', top: '80px', right: '20px' }}>
                            <Link style={{ marginTop: '10px', marginRight: '30px', backgroundColor: 'blue', color: 'white' }} to="/admin/special/add" className='btn'>Add New Product</Link>
                        </div>
                        <div style={{ marginLeft: '50px' }}><SalesChart /></div>

                    </div>



                </div>


            </div>



        </>
    )
}

export default AdminDashboard