import React from 'react';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

import HomeProducts from '../components/homeproducts/HomeProducts';

function Home() {
  // const { data, isLoading, error } = useQuery('dataProducts', () => {
  //   fetch('https://api.escuelajs.co/api/v1/products').then((res) => console.log(res.json()));
  // });

  // const MainContent = styled.main`
  //   width: 100%;
  //   grid-area: main;
  //   margin-top: 50px;
  // `;

  return (
    <div className="w-full grid-area-main mt-[4.2rem]">
      <HomeProducts />
    </div>
  );
}

export default Home;
