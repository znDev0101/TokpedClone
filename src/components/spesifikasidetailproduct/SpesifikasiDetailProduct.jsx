import React from 'react';

const SpefsiikasiDetailProduct = () => {
  return (
    <div>
      <h1 className="font-bold mt-5">Info Product</h1>
      <div className="grid grid-cols-[repeat(2,max-content)] gap-x-16">
        <ul>
          <li>Acara</li>
          <li>Bahan</li>
          <li>Gaya Pakaian</li>
          <li>Model Lengan</li>
        </ul>
        <ul>
          <li>: Acara Formal</li>
          <li>: Katun</li>
          <li>: Casual / Formal</li>
          <li>: Lengan Puff</li>
        </ul>
      </div>
    </div>
  );
};

export default SpefsiikasiDetailProduct;
