import React from 'react';

function CardProducts({ dataProducts }) {
  return (
    <div className="w-[93%] m-[40px_auto]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        {dataProducts.map(({ id, category, title, image, price }) => {
          return (
            <div className="w-full grid  grid-rows-[13rem_1rem_.5rem] h-[350px] border border-green-600 align_items_center pt-5 p-2 gap-y-5">
              <div className="object-cover m-auto">
                <img src={image} alt="image-products" className="w-[120px] m-auto object-cover" />
              </div>
              <div className="h-[50px] overflow-hidden">
                <h5>{title}</h5>
              </div>
              <div className="mt-4">
                <p>{price}</p>
              </div>
              <div className="text-gray-500">Terjual 999++</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardProducts;
