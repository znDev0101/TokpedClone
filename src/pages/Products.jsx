import React from 'react';
import { useLocation } from 'react-router';
import CardProducts from '../components/cardproducts/CardProducts';
import { fetchData } from '../utils/fetchData';

function Products() {
  const { data } = fetchData('https://fakestoreapi.com/products');

  const { pathname } = useLocation();

  const filterProducts = pathname.split('');
  const filterProduct = filterProducts
    .filter((data) => data !== '/' && data !== '_')
    .toString()
    .replace(/,/g, '')
    .replace(/products/, '');

  console.log(filterProduct);

  const finalFilterResultProducts = data.filter(({ category }) => category === filterProduct);
  const productMensClothing = data.filter(({ category }) => category === "men's clothing");
  const productWomensClothing = data.filter(({ category }) => category === "women's clothing");

  return (
    <>
      {filterProduct.match('mensclothing') ? (
        <CardProducts dataProducts={productMensClothing} urlPath={'/product_mens_clothing_detail'} />
      ) : filterProduct.match('womensclothing') ? (
        <CardProducts dataProducts={productWomensClothing} logicBackNavigation />
      ) : (
        <CardProducts dataProducts={finalFilterResultProducts} urlPath={`/product_${filterProduct}_detail`} />
      )}
    </>
  );
}

export default Products;
