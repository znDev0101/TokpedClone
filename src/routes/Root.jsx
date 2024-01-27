import React, { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState } from 'react';
import { MyContext } from '../context/MyContext';
import { ToastContainer } from 'react-toastify';

function Root() {
  const [isActive, setIsActive] = useState(false);
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <MyContext.Provider value={{ isActive, isOpenMainMenu }}>
      <div className="w-full relative overflow-hidden">
        <ToastContainer className="mb-14" />
        <Navbar setIsActive={setIsActive} isOpenMainMenu={isOpenMainMenu} setIsOpenMainMenu={setIsOpenMainMenu} />
        <Outlet context={[modal, setModal]} />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default Root;
