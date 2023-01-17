import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogFetch from '../../axios/config'
import PostComments from '../../components/PostComments/PostComments';

import './ViewPost.css';


const ViewPost = () => {
  const { id } = useParams();

  const [onePost, setOnePost] = useState([]) //get and setter
  const getOnePost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`)
      const data = response.data;
      //console.log(data)

      setOnePost(data)

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {

    getOnePost()

  }, [])

  return (
    <div className="viewPost">

      <h1>{onePost.title}</h1>
      <h5>User ID: {onePost.userId}</h5>
      <h3>{onePost.body}</h3>

      <h2 className="h2Comments">Comments this Post:</h2>
      <PostComments />
    </div>

  )
}

export default ViewPost
