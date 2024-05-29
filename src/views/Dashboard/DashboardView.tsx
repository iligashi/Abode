import React, { useEffect, useState } from "react";
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

type UsersRegistration = {
  userRegistrationId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const DashboardView: React.FC = () => {
  const [posts, setPosts] = useState<UsersRegistration[]>([]);
  const [newUsersRegistration, setNewUsersRegistration] = useState<UsersRegistration>({
    userRegistrationId: 0,
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<UsersRegistration[]>("https://localhost:7083/api/UsersRegistration");
      console.log("Data fetched successfully:", response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://localhost:7083/api/UsersRegistration/${id}`);
        console.log("User deleted successfully");
        setPosts(posts.filter(post => post.userRegistrationId !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <main>
        <div className="card">
          <h2 className="card-header">User Registrations</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.userRegistrationId}>
                  <td>{post.userRegistrationId}</td>
                  <td>{post.firstName}</td>
                  <td>{post.lastName}</td>
                  <td>{post.email}</td>
                  <td>
                    <a className="btn btn-sm btn-danger" href="#" onClick={() => deleteUser(post.userRegistrationId)}>
                      <i className="fas fa-trash-alt"></i> Delete
                    </a>
                    {/* <a className="btn btn-sm btn-primary" href="#"><i className="far fa-edit"></i> Edit</a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashboardView;
