import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ProfileView.css';
import Header from './Header';

interface UserData {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  bio: string;
  phoneNumber: string;
  profileImageUrl: string;
  status: string;
}

const ProfileView: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLastLoggedInUser = async () => {
      try {
        const response = await fetch(`https://localhost:7083/api/UserAccount/GetUserAccounts`);
        if (!response.ok) {
          throw new Error('Failed to fetch last logged-in user.');
        }
        const userAccounts = await response.json();
        const lastLoggedInUser = userAccounts[userAccounts.length - 1]; // Get the last user
        if (!lastLoggedInUser) {
          throw new Error('No user found.');
        }
        // Set email and password from the last logged-in user
        const { email, password } = lastLoggedInUser;
        fetchUserProfile(email, password);
      } catch (error) {
        console.error('Error fetching last logged-in user:', error);
        setError('Failed to fetch user data.');
        setIsLoading(false);
      }
    };

    fetchLastLoggedInUser();
  }, []);

  const fetchUserProfile = async (email: string, password: string) => {
    try {
      const response = await fetch(`https://localhost:7083/api/UserAccount/PostUserAccount`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user profile.');
      }
      const userData: UserData = await response.json();
      setUserData(userData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError('Failed to fetch user data.');
      setIsLoading(false);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleInputChange = (key: keyof UserData, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                <form onSubmit={handleSubmit}>
                  <div className="profile-info">
                    <div className="profile-item">
                      <strong>Username:</strong> {isEditing ? <input type="text" value={userData.username} onChange={(e) => handleInputChange('username', e.target.value)} /> : userData.username}
                    </div>
                    <div className="profile-item">
                      <strong>Password:</strong> {isEditing ? <input type="password" value={userData.password} onChange={(e) => handleInputChange('password', e.target.value)} autoComplete="current-password" /> : '*'.repeat(userData.password ? userData.password.length : 0)}
                    </div>
                    <div className="profile-item">
                      <strong>Name:</strong> {isEditing ? <input type="text" value={userData.name} onChange={(e) => handleInputChange('name', e.target.value)} /> : userData.name}
                    </div>
                    <div className="profile-item">
                      <strong>Surname:</strong> {isEditing ? <input type="text" value={userData.surname} onChange={(e) => handleInputChange('surname', e.target.value)} /> : userData.surname}
                    </div>
                    <div className="profile-item">
                      <strong>Email:</strong> {isEditing ? <input type="email" value={userData.email} onChange={(e) => handleInputChange('email', e.target.value)} autoComplete="email" /> : userData.email}
                    </div>
                    <div className="profile-item">
                      <strong>Phone Number:</strong> {isEditing ? <input type="tel" value={userData.phoneNumber} onChange={(e) => handleInputChange('phoneNumber', e.target.value)} autoComplete="tel" /> : userData.phoneNumber}
                    </div>
                    <div className="profile-item">
                      <strong>Status:</strong> {isEditing ? <input type="text" value={userData.status} onChange={(e) => handleInputChange('status', e.target.value)} /> : userData.status}
                    </div>
                    <div className="profile-item">
                      <strong>Bio:</strong> {isEditing ? <textarea value={userData.bio} onChange={(e) => handleInputChange('bio', e.target.value)} /> : userData.bio}
                    </div>
                    {isEditing && (
                      <div className="profile-item">
                        <strong>Profile Picture:</strong> <input type="file" onChange={handleImageChange} />
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <div className="profile-actions">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  )}
                </form>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
