import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const DescriptionInfoProduct = (props) => {
  const { id, category, description } = props;

  return (
    <div>
      <nav>
        <ul className="flex gap-x-5  mt-5">
          <li className="after:content-[''] after:flex after:flex-col after:border after:w-full after:h-1 after:bg-green-600  after:mt-2">
            <NavLink
              to={`/product_detail/${id}`}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'green' : 'black',
                };
              }}
            >
              Detail
            </NavLink>
          </li>
          <li>
            <NavLink
              to="spesifikasi"
              style={({ isActive }) => {
                return {
                  color: isActive ? 'green' : 'black',
                };
              }}
            >
              Spesifikasi
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet context={{ category, description }} />
    </div>
  );
};

export default DescriptionInfoProduct;
