import React, { useState } from 'react';
import AvatharProfile from "../assets/AvatharProfile.jpg";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = ({ insideProfile,userId1 }) => {
  console.log(insideProfile);
  
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  return (
    <div className="relative ">
      <img 
        src={AvatharProfile} 
        onClick={handleShowInfo} 
        alt="Profile" 
        width="40"
        height="40" 
        className="rounded-circle ms-3 cursor-pointer" 
      />

      {/* Display Name and Age Div */}
      {showInfo && (
        <div 
          className="position-fixed end-0 bg-white shadow rounded p-3" 
          style={{ width: "250px", right: "10px", top: '80px', zIndex: 1050 }}
        >
          <div className="text-center">
            <button onClick={handleCloseInfo} className="btn-close float-end"></button>
            <img 
              src={AvatharProfile} 
              alt="Profile" 
              width="100" 
              height="100" 
              className="rounded-circle mb-2  ms-15 " 
            />
            <h5 className="text-black">{userId1.username}</h5>
            <p className="text-muted">Address: {userId1.address}</p>
            <p className="text-muted">Email: {userId1.emailaddress}</p>
            <p className="text-muted">Phone: {userId1.phonenumber}</p>
            <p className="text-muted">Password: {userId1.password}</p>
            
            <Link to='/profileEdit'><Button className="w-100 btn-primary my-2">Edit</Button></Link>
            <Link className="text-danger text-decoration-none d-block">Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;