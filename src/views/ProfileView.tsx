import React, { useState } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({ name, email, bio, phoneNumber });

  const toggleStatus = () => {
    setStatus(status === 'Active' ? 'Sleepy' : 'Active');
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
   
    setIsEditing(false);
  };

  const handleCancel = () => {
    
    setEditedInfo({ name, email, bio, phoneNumber });
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEditedInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
   
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        
        console.log('Selected image URL:', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="profile-header text-center">
                <div className="profile-picture-container">
                  <img src={profileImageUrl} className="profile-picture" alt="Profile" />
                  {!isEditing && (
                    <button className="btn btn-primary mt-2" onClick={handleEditProfile}>Edit Profile</button>
                  )}
                  {isEditing && (
                    <div className="change-image-button">
                      <label htmlFor="image-upload" className="btn btn-outline-primary mt-2">Change Image</label>
                      <input type="file" id="image-upload" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                    </div>
                  )}
                </div>
                <div className="profile-title">
                  <h2>{name}</h2>
                </div>
              </div>
              <div className="profile-body">
                <div className="profile-info">
                  <div className="profile-item">
                    <strong>Email:</strong> {isEditing ? <input type="text" name="email" value={editedInfo.email} onChange={handleInputChange} className="form-control" /> : email}
                  </div>
                  <div className="profile-item">
                    <strong>Phone Number:</strong> {isEditing ? <input type="text" name="phoneNumber" value={editedInfo.phoneNumber} onChange={handleInputChange} className="form-control" /> : phoneNumber}
                  </div>
                  <div className="profile-item">
                    <strong>Status:</strong> {status} <button className="btn btn-outline-primary btn-sm" onClick={toggleStatus}>Toggle Status</button>
                  </div>
                  <div className="profile-item">
                    <strong>Bio:</strong> {isEditing ? <textarea name="bio" value={editedInfo.bio} onChange={handleInputChange} className="form-control" /> : bio}
                  </div>
                </div>
                <div className="profile-actions">
                  {isEditing ? (
                    <>
                      <button className="btn btn-primary mr-2" onClick={handleSave}>Save</button>
                      <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary mr-2">Change Passwords</button>
                      <button className="btn btn-primary">See Favorites</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {!isEditing && (
            <div className="text-center mt-3">
              <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
