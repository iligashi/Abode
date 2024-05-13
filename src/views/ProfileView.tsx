// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './css/ProfileView.css';
// import Header from './Header';

// interface Props {
//   name: string;
//   surname: string;
//   email: string;
//   bio: string;
//   phoneNumber: string;
//   profileImageUrl: string;
//   status: string;
// }

// const ProfileView: React.FC<Props> = ({ name, surname, email, bio, phoneNumber, profileImageUrl, status: initialStatus }) => {
//   const [status, setStatus] = useState(initialStatus);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedInfo, setEditedInfo] = useState({ name, surname, email, bio, phoneNumber });
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const toggleStatus = () => {
//     setStatus(status === 'Active' ? 'Sleepy' : 'Active');
//   };

//   const handleEditProfile = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setEditedInfo({ ...editedInfo, name, surname, email, bio, phoneNumber });
//     setIsEditing(false);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setEditedInfo(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const imageUrl = e.target?.result as string;
//         console.log('Selected image URL:', imageUrl);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChangePassword = () => {
//     // Send a request to update the password to the backend
//     console.log('Changing password...');
//     // Reset password fields after changing
//     setOldPassword('');
//     setNewPassword('');
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color : 'white'
//   };

//   const widthFix = {
//     width: 'auto'
//   };

//   return (
//     <div className="container">
//       <Header />
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-body">
//               <div className="profile-header text-center">
//                 <div style={{ width: '100%' }}> 
//                   <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                     <div style={{ display: 'block' }}>
//                       <img src={profileImageUrl} className="profile-picture" alt="Profile" />
//                       <div className="profile-title">
//                         <h2>{editedInfo.name} {editedInfo.surname}</h2>
//                       </div>
//                     </div>
//                     <div style={{ alignSelf: 'start' }}>
//                       {!isEditing && (
//                         <button className="btn btn-primary mt-2" onClick={handleEditProfile} style={widthFix}>Edit Profile</button>
//                       )}
//                     </div>
//                   </div>
//                   {isEditing && (
//                     <div className="change-image-button">
//                       <label htmlFor="image-upload" className="btn btn-outline-primary mt-2">Change Image</label>
//                       <input type="file" id="image-upload" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="profile-body">
//                 <div className="profile-info">
//                   <div className="profile-item">
//                     <strong>Name:</strong> {isEditing ? <input type="text" name="name" value={editedInfo.name} onChange={handleInputChange} className="form-control" /> : editedInfo.name}
//                   </div>
//                   <div className="profile-item">
//                     <strong>Surname:</strong> {isEditing ? <input type="text" name="surname" value={editedInfo.surname} onChange={handleInputChange} className="form-control" /> : editedInfo.surname}
//                   </div>
//                   <div className="profile-item">
//                     <strong>Email:</strong> {isEditing ? <input type="text" name="email" value={editedInfo.email} onChange={handleInputChange} className="form-control" /> : email}
//                   </div>
//                   <div className="profile-item">
//                     <strong>Phone Number:</strong> {isEditing ? <input type="text" name="phoneNumber" value={editedInfo.phoneNumber} onChange={handleInputChange} className="form-control" /> : phoneNumber}
//                   </div>
//                   <div className="profile-item">
//                     <strong>Status:</strong> {status} <button className="btn btn-outline-primary btn-sm" onClick={toggleStatus} style={widthFix}>Toggle Status</button>
//                   </div>
//                   <div className="profile-item">
//                     <strong>Bio:</strong> {isEditing ? <textarea name="bio" value={editedInfo.bio} onChange={handleInputChange} className="form-control" /> : bio}
//                   </div>
//                   {/* Add input fields for old password and new password */}
//                   {isEditing && (
//                     <>
//                       <div className="profile-item">
//                         <strong>Old Password:</strong> <input type="password" name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="form-control" />
//                       </div>
//                       <div className="profile-item">
//                         <strong>New Password:</strong> <input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" />
//                       </div>
//                     </>
//                   )}
//                 </div>
//                 <div className="profile-actions">
//                   {isEditing ? (
//                     <>
//                       <button className="btn btn-primary mr-2" onClick={handleSave} style={widthFix}>Save</button>
//                       <button className="btn btn-secondary" onClick={handleCancel} style={widthFix}>Cancel</button>
//                     </>
//                   ) : (
//                     <>
//                       {/* Add onClick handler for changing password */}
//                       <button className="btn btn-primary mr-2" onClick={handleChangePassword} style={widthFix}>Change Password</button>
//                       <button className="btn btn-primary" style={widthFix}>See Favorites</button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {!isEditing && (
//             <div className="text-center mt-3">
//               <button className="btn btn-danger"  style={widthFix}><Link style={linkStyle} to="/login">Log Out</Link></button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileView;
import React, { useState, useEffect } from 'react';
import './css/ProfileView.css';
import Header from './Header';

const ProfileView = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    bio: '',
    phoneNumber: '',
    profileImageUrl: '',
    status: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://localhost:7083/api/Users/${userId}`);
      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (userId !== '') {
      fetchUserData();
    }
  }, [userId]);

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleInputChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://localhost:7083/api/Users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        console.log('User data updated successfully');
        setIsEditing(false);
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="profile-header text-center">
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'block' }}>
                      <img src={userData.profileImageUrl} className="profile-picture" alt="Profile" />
                      <div className="profile-title">
                        <h2>{userData.name} {userData.surname}</h2>
                      </div>
                    </div>
                    <div style={{ alignSelf: 'start' }}>
                      {!isEditing && (
                        <button className="btn btn-primary mt-2" onClick={handleEditProfile}>Change Profile</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-body">
                <div className="profile-info">
                  <div className="profile-item">
                    <label htmlFor="userId">User ID:</label>
                    <input type="text" id="userId" value={userId} onChange={handleUserIdChange} />
                  </div>
                  <div className="profile-item">
                    <strong>Username:</strong> {isEditing ? <input type="text" value={userData.username} onChange={(e) => handleInputChange('username', e.target.value)} /> : userData.username}
                  </div>
                  <div className="profile-item">
                    <strong>Password:</strong> {isEditing ? <input type="password" value={userData.password} onChange={(e) => handleInputChange('password', e.target.value)} /> : '*'.repeat(userData.password.length)}
                  </div>
                  <div className="profile-item">
                    <strong>Name:</strong> {isEditing ? <input type="text" value={userData.name} onChange={(e) => handleInputChange('name', e.target.value)} /> : userData.name}
                  </div>
                  <div className="profile-item">
                    <strong>Surname:</strong> {isEditing ? <input type="text" value={userData.surname} onChange={(e) => handleInputChange('surname', e.target.value)} /> : userData.surname}
                  </div>
                  <div className="profile-item">
                    <strong>Email:</strong> {isEditing ? <input type="text" value={userData.email} onChange={(e) => handleInputChange('email', e.target.value)} /> : userData.email}
                  </div>
                  <div className="profile-item">
                    <strong>Phone Number:</strong> {isEditing ? <input type="text" value={userData.phoneNumber} onChange={(e) => handleInputChange('phoneNumber', e.target.value)} /> : userData.phoneNumber}
                  </div>
                  <div className="profile-item">
                    <strong>Status:</strong> {isEditing ? <input type="text" value={userData.status} onChange={(e) => handleInputChange('status', e.target.value)} /> : userData.status}
                  </div>
                  <div className="profile-item">
                    <strong>Bio:</strong> {isEditing ? <textarea value={userData.bio} onChange={(e) => handleInputChange('bio', e.target.value)} /> : userData.bio}
                  </div>
                </div>
                {isEditing && (
                  <div className="profile-actions">
                    <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
