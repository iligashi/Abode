import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './css/ProfileView.css'; 

interface Props {
  name: string;
  email: string;
  bio: string;
  phoneNumber: string;
  profileImageUrl: string;
  status: string;
}

const ProfileView: React.FC<Props> = ({ name, email, bio, phoneNumber, profileImageUrl, status: initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);

  const toggleStatus = () => {
    setStatus(status === 'Active' ? 'Sleepy' : 'Active');
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    
    <div className="profile-container">
      <div className="profile">
        <div className="profile-header">
          <div className="profile-picture-container">
            <img src={profileImageUrl} className="profile-picture" alt="Profile" />
            <div className="edit-profile-button">Edit Profile</div>
          </div>
          <div className="profile-title">{name}</div>
        </div>
        <div className="profile-body">
          <div className="profile-info">
            <div className="profile-item">
              <strong>Email:</strong> {email}
            </div>
            <div className="profile-item">
              <strong>Phone Number:</strong> {phoneNumber}
            </div>
            <div className="profile-item">
              <strong>Status:</strong> {status} <Button variant="outline-primary" size="sm" onClick={toggleStatus}>Toggle Status</Button>
            </div>
            <div className="profile-item">
              <strong>Bio:</strong> {bio}
            </div>
          </div>
          <div className="profile-actions">
            <Button variant="primary">Change Passwords</Button>{' '}
            <Button variant="primary">See Favorites</Button>{' '}
          </div>
        </div>
      </div>
      <div className="logout-button">
        <Button variant="danger" onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  );
}

export default ProfileView;
