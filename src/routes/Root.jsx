import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState } from 'react';
import { MyContext } from '../context/MyContext';

function Root() {
  const [isActive, setIsActive] = useState(false);
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      <MyContext.Provider value={{ isActive, isOpenMainMenu }}>
        <Navbar setIsActive={setIsActive} isOpenMainMenu={isOpenMainMenu} setIsOpenMainMenu={setIsOpenMainMenu} />
        <Outlet context={[modal, setModal]} />
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default Root;
