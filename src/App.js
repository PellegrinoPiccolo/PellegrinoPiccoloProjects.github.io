import './style.scss'
import Home from "./pages/Home";
import React from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Project from './pages/project/Project';

function App() {

  const Layout = () =>{
    return(
      <>
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/project/:id",
          element: <Project />
        }
      ]
    },
  ]);
  
  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
