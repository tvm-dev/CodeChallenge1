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
      setUserDetails(data)

    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    getUserDetails()
  }, [])


  return (
    <div className='userDetail'>

      <h1>User Details:</h1><hr />


      <h2>{userDetails.name}</h2>

      <br /><br />
      <h3>More Data:</h3>

      E-mail: <span><p>{userDetails.email}</p></span>
      Phone: <span><p>{userDetails.phone}</p></span>
      My Username: <span><p>{userDetails.username}</p></span>
      My webiste: <span><p><a
        href={userDetails.website}
        target="_blank">
        {userDetails.website}
      </a>
      </p></span>

    </div >
  );
}

export default UserDetails;
