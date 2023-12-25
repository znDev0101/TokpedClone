import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function Root() {
  return (
    <div className="w-full relative overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
