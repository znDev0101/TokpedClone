import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

function App() {
  const Layout = () => {
    const LayoutPages = styled.main`
      display: grid;
      width: 100%;
      overflow: hidden;
      grid-template-areas:
        'nv nv nv'
        'main main main'
        'fot fot fot';
      grid-template-rows: 8rem auto 5rem;
    `;

    return (
      <LayoutPages>
        <Reset />
        <Navbar />
        <Outlet />
        <Footer />
      </LayoutPages>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
