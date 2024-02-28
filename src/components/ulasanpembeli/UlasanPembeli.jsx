import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function UlasanPembeli({ dataLimit }) {
  return (
    <div className="mx-auto grid lg:col-[1/2] grid-rows-[repeat(2,max-content)] gap-y-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Ulasan Pembeli</h2>
        <Link to="/ulasan_pembeli" className="font-bold text-green-700">
          Lihat Semua
        </Link>
      </div>
      {dataLimit.map(({ id, name, comment }) => {
        return (
          <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[3,max-content] gap-y-2" key={id}>
            {/* User Comment */}
            <div className="flex  gap-x-3 items-center">
              <FontAwesomeIcon icon={faUser} />
              <span className="text-sm">{name}</span>
            </div>
            {/* Isi comment */}
            <p className="row-[2] col-[1/3] text-sm">
              {comment} Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo suscipit, cumque harum inventore nobis nostrum aut nihil? Sit, nesciunt suscipit? Distinctio dolorum exercitationem vel accusamus. Illum, eius
              necessitatibus officia provident consequuntur exercitationem ut voluptatum eveniet maiores? Reiciendis porro suscipit corrupti corporis consequatur iure dignissimos quisquam excepturi ea voluptatibus vero eaque debitis
              consequuntur officia assumenda veritatis, facere magni non quae aliquam laudantium dolore eum enim quam. Fugit ratione a nisi ipsa vitae soluta nihil dicta, quos, quia quisquam sed quam et minus modi neque harum magnam maxime
              exercitationem ex quo consectetur deserunt? Numquam asperiores totam harum ad fuga alias voluptatem.{' '}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UlasanPembeli;
