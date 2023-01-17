import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//Importing pages from router Folder:
import Home from './routes/Home/Home';
import NewPost from './routes/NewPost/NewPost';
import ViewPost from './routes/ViewPost/ViewPost';
import Users from './components/Users/listUsers';
import UserDetails from './components/UserDetails/UserDetails';
import About from './components/About/About';

import './index.css'



//Routing configuration object, for use at routes:
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/posts/:id",
        element: <ViewPost />,
      },
      {
        path: "/about",
        element: <About />,
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

