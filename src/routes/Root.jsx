import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState } from 'react';
import { MyContext } from '../context/MyContext';

function Root() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full relative overflow-hidden ">
      <MyContext.Provider value={isActive}>
        <Navbar setIsActive={setIsActive} />
        <Outlet />
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default Root;
