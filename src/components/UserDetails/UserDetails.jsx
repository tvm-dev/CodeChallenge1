import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogFetch from '../../axios/config';

import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  const getUserDetails = async () => {
    try {
      const res = await blogFetch.get(`/users/${id}`)
      const data = res.data;
      //console.log(data)
      setUserDetails(data)

    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    getUserDetails()
  }, [])

  const names = ['thiago', 'eike', 'pi', 'diva', 'henry']

  return (
    <div className='userDetail'>

      <h1>User Details:</h1><hr />
      Hi, my name is <span>{userDetails.name}</span>
      <br /><br />
      <h2>My Basic Data:</h2>
      <ul>
        <li><p>E-mail: <span>{userDetails.email}</span></p></li>
        <li><p>Phone: <span>{userDetails.phone}</span></p></li>
        <li><p>Username: <span>{userDetails.username}</span></p></li>
        <li><p>My webiste: <span> {userDetails.website}</span></p></li><br />
      </ul>

      <h2>My Address:</h2>






      <p>{userDetails.address.street[0]}</p>








    </div >
  );
}

export default UserDetails;
