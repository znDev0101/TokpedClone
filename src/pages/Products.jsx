import React, { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router';
import CardProducts from '../components/cardproducts/CardProducts';
import { useFilterCategory } from '../hooks/useFilterCategory';

function Products() {
  const [filterKeyword, setFilterKeyword] = useState('');
  const { pathname } = useLocation();
  const { setUrlPath } = useOutletContext();

  useEffect(() => {
    const keywordManipulation = pathname.replace(/\/|products|category/g, '');
    if (keywordManipulation.match('mens_clothing')) {
      let gender = [];
      let result;
      const manipulationStr = keywordManipulation.split('_');
      manipulationStr[0].split('').forEach((element) => {
        gender.push(element);
      });
      result = gender.splice(gender.length - 1, 0, "'").join('');

      setFilterKeyword(gender.join('') + ` ${manipulationStr[1]}`);
    } else {
      setFilterKeyword(keywordManipulation);
    }

    const urlPath = pathname.split('/').slice(3).join('');
    setUrlPath(urlPath);
  }, [pathname]);

  const { data, isLoading } = useFilterCategory('https://fakestoreapi.com/products', filterKeyword, pathname);
  if (isLoading) return <h1 className="text-4xl my-20 text-center">Loading...</h1>;
  return (
    <div
      className={
        pathname === '/wishlist'
          ? 'w-full mx-auto px-4 m-[20px_auto] grid grid-cols-[repeat(2,1fr)] gap-3 '
          : pathname !== '/'
          ? 'w-full m-[70px_auto] lg:mt-36 px-4 lg:px-16 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3'
          : 'w-full mx-auto mt-4 mb-20 px-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3'
      }
    >
      {data.map(({ id, category, title, image, price, rating }) => {
        return <CardProducts key={id} id={id} category={category} title={title} image={image} price={price} rating={rating} urlPath={'/product_detail'} />;
      })}
    </div>
  );
}

export default Products;
