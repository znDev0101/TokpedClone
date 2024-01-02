import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CardProducts from '../components/cardproducts/CardProducts';
import { useFilterCategory } from '../hooks/useFilterCategory';

function Products() {
  const [filterKeyword, setFilterKeyword] = useState('');
  const { pathname } = useLocation();
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    const keywordManipulation = pathname.replace(/\/|products|category/g, '');
    setFilterCategory(keywordManipulation);
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
  }, []);

  console.log(filterCategory);

  const { data, isLoading } = useFilterCategory('https://fakestoreapi.com/products', filterKeyword);
  if (isLoading) return <h1 className="text-4xl my-20 text-center">Loading...</h1>;
  return <CardProducts dataProducts={data} urlPath={`/product_${filterCategory}_detail`} />;
}

export default Products;
