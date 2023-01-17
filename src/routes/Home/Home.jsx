//rafce
import blogFetch from '../../axios/config'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {

  //Getting post from API:
  const [posts, setPosts] = useState([]) //store datas
  const getPosts = async () => {


    try {
      const response = await blogFetch.get("/posts")
      //console.log(response)

      //Showing datas:
      const data = response.data;
      //console.log(data)

      setPosts(data)



    } catch (error) {
      console.log(error)

    }

  }
  useEffect(() => {
    getPosts();

  }, [])



  return (
    <div className="home"><h1> [ Latest Posts ]</h1>

      {posts.length === 0 ? <p>Loading Posts...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn"> Read More ...</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home;
