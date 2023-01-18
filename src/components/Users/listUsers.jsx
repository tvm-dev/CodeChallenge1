import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import blogFetch from "../../axios/config"

import './listUsers.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const res = await blogFetch.get("/users")
      const data = res.data;
      console.log(data)
      setUsers(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className="allUsers">
      <h1> [ All Users List]</h1>

      {users.length === 0 ? <p>Loading users...</p> : (
        users.map((user, key) => (

          <div className="user" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.username} - {user.email}</p><br />
            <Link to={`/CodeChallenge1/users/${user.id}`} className="btn">More Details...</Link>
          </div>
        ))
      )}
    </div>
  )
}
export default Users
