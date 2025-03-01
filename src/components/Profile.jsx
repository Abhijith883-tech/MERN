import React, { useState } from 'react';
import AvatharProfile from "../assets/AvatharProfile.jpg";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = ({ insideProfile }) => {
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
            <h5 className="text-black">Abhijith</h5>
            <p className="text-muted">Address: [Your Address]</p>
            <p className="text-muted">Email: [Your Email]</p>
            <p className="text-muted">Phone: [Your Phone]</p>
            <p className="text-muted">Password: ******</p>
            
            <Link to='/profileEdit'><Button className="w-100 btn-primary my-2">Edit</Button></Link>
            <Link className="text-danger text-decoration-none d-block">Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;