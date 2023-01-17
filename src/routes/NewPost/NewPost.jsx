import blogFetch from '../../axios/config'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './NewPost.css';

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });


    navigate('/');

  };


  return (
    <div className='new-post'>
      <h2>Insert new post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name='title'
            id='title'
            placeholder='Type your title here'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Content</label>
          <textarea
            name="body"
            id="body"
            placeholder='Type your content here'
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Create Post" className='btn'></input>
      </form><br /><br />


      <p id='p'>After sending this Post, it is "saved" in the FAKE Api, this can be verified in the developer tab of Google Chrome with Status 200. And then the user is redirected to the main page of the application.</p><br /><br />


    </div>




  )
}

export default NewPost;
