import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import ErrorPage from './Error Page/ErrorPage';
import JobDetails from './Components/JobDetail/JobDetails';
import AppliedJobs from './Components/Applied Jobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {

        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch("../jobs.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
