import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./styles.css";
interface user {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
const Users: React.FC = () => {
  const [users, setUsers] = useState<Array<user> | null>(null);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users").then((res) =>
      setUsers(res.data.data)
    );
  }, []);

  if (!users) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="app">
      <h1>Listagem de usuarios</h1>
      {users.map((user) => {
        return (
          <div key={user.id} className="user-container">
            <img src={user.avatar} alt={user.first_name} className="avatar" />
            <div className="user-content">
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
