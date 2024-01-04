import React from 'react';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

import HomeProducts from '../components/homeproducts/HomeProducts';
import { createContext } from 'react';

function Home() {
  return (
    <div className="w-full mt-[4.2rem]">
      <HomeProducts />
    </div>
  );
}

export default Home;
