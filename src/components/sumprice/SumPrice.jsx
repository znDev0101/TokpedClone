import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { falseAllBooleanChecked, trueAllBooleanChecked } from '../../redux/cartSlice/cartSlice';
import Button from '../button/Button';

const SumPrice = () => {
  const { totalPrice, cartProduct } = useSelector((state) => state.cart);

  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked) dispatch(trueAllBooleanChecked());
  }, [isChecked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full fixed bottom-0 flex justify-between py-1 px-5 bg-white">
      <div className="flex gap-x-2 items-center">
        <div className="w-6 h-6">
          <input type="checkbox" className="w-full h-full" checked={isChecked} onChange={handleChange} />
        </div>
        <h5>Semua</h5>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="flex flex-col gap-y-1 text-right">
          <h5>Total</h5>
          <span>{totalPrice === 0 ? `-` : `${totalPrice}`}</span>
        </div>
        <Button textButton={'Beli'} styleButton={`font-bold text-white px-8 py-2 rounded-md bg-green-700`} />
      </div>
    </div>
  );
};

export default SumPrice;
