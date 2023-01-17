import blogFetch from '../../axios/config'
import { useState, useEffect } from "react"

import './PostComments.css'
import { useParams } from "react-router-dom"

const PostComments = () => {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const getComments = async () => {

    try {
      const response = await blogFetch.get(`/posts/${id}/comments`)
      //console.log(response)
      const data = response.data;
      console.log(data)

      setComments(data)

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getComments()
  }, [])


  return (
    <div>

      {comments.lenght === 0 ? <p>No comments yet.</p> : (
        comments.map((comment, key) => (

          <div className="comments" key={comment.id}>
            <ul>
              <li>Name: {comment.name}</li>
              [E-mail: {comment.email} ]
              <p>{comment.body}</p>
            </ul>
          </div>

        ))
      )}

    </div>
  )
}

export default PostComments
