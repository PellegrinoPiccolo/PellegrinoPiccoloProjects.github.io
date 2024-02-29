import './style.scss'
import Home from "./pages/Home";
import React from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Project from './pages/project/Project';
import Error404 from './pages/error404/Error404';

function App() {

  const Layout = () =>{
    return(
      <>
        <Outlet />
        <Footer />
        <ScrollRestoration
          getKey={(location, matches) => {
            const paths = "/";
            return paths.includes(location.pathname)
              ? // home and notifications restore by pathname
                location.pathname
              : // everything else by location like the browser
                location.key;
          }}
        />
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
        },
        {
          path: "*",
          element: <Error404 />
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
