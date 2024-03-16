import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const SearchKeyword = ({
  isActiveSearchKeyword,
  setIsActiveSearchKeyword,
  data,
  isLoading,
  noResult,
  seacrhKeyword,
  styleLayout,
}) => {
  return (
    <>
      {isActiveSearchKeyword ? (
        <div className={styleLayout}>
          {seacrhKeyword?.length > 0 ? (
            isLoading ? (
              <p className="text-2xl lg:text-4xl text-center mt-8 font-bold">
                Loading...
              </p>
            ) : noResult ? (
              <p className="text-2xl mt-20 text-center font-bold">
                Pencarian tidak di temukan
              </p>
            ) : (
              data?.map(({ title, id }) => {
                return (
                  <div
                    className="w-full grid grid-cols-[max-content_1fr]  items-center mb-5 gap-x-2"
                    key={id}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size="xl"
                      className="text-gray-400"
                    />
                    <Link
                      to={`/product_detail/${id}`}
                      onClick={() => setIsActiveSearchKeyword(false)}
                      className="grid grid-cols-[1fr_max-content] gap-x-1 items-center">
                      <p>{title.slice(0, 20)}</p>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        size="xl"
                      />
                    </Link>
                  </div>
                )
              })
            )
          ) : null}
        </div>
      ) : null}
    </>
  )
}

export default SearchKeyword
