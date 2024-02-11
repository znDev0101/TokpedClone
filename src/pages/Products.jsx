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
  }, []);

  const { data, isLoading } = useFilterCategory('https://fakestoreapi.com/products', filterKeyword);
  if (isLoading) return <h1 className="text-4xl my-20 text-center">Loading...</h1>;
  return <CardProducts dataProducts={data} urlPath={`/product_detail`} />;
}

export default Products;
