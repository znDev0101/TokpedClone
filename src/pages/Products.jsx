import React, { useEffect, useState } from "react"
import { useLocation, useOutletContext } from "react-router"
import CardProducts from "../components/cardproducts/CardProducts"
import { useFilterCategory } from "../hooks/useFilterCategory"
import CardSkeleton from "../components/skeleton/CardSkeleton"

function Products() {
  const [filterKeyword, setFilterKeyword] = useState("")
  const { pathname } = useLocation()
  const { setUrlPath } = useOutletContext()

  useEffect(() => {
    const keywordManipulation = pathname.replace(/\/|products|category/g, "")
    if (keywordManipulation.match("mens_clothing")) {
      let gender = []
      let result
      const manipulationStr = keywordManipulation.split("_")
      manipulationStr[0].split("").forEach((element) => {
        gender.push(element)
      })
      result = gender.splice(gender.length - 1, 0, "'").join("")

      setFilterKeyword(gender.join("") + ` ${manipulationStr[1]}`)
    } else {
      setFilterKeyword(keywordManipulation)
    }

    const urlPath = pathname.split("/").slice(3).join("")
    setUrlPath(urlPath)
  }, [pathname])

  const { data, isLoading } = useFilterCategory(
    "https://fakestoreapi.com/products",
    filterKeyword,
    pathname
  )

  console.log(filterKeyword)

  return (
    <div className="w-full lg:max-w-6xl lg:mx-auto px-4 pt-20 pb-10 min-h-screen lg:pt-40 grid grid-cols-2 lg:grid-cols-6 gap-3">
      {isLoading ? (
        <CardSkeleton
          cards={
            filterKeyword === "men's clothing" || filterKeyword === "jewelery"
              ? 4
              : (filterKeyword === "electronics" ||
                  filterKeyword === "women's clothing") &&
                6
          }
        />
      ) : (
        data.map(({ id, category, title, image, price, rating }) => {
          return (
            <CardProducts
              key={id}
              id={id}
              category={category}
              title={title}
              image={image}
              price={price}
              rating={rating}
              urlPath={"/product_detail"}
            />
          )
        })
      )}
    </div>
  )
}

export default Products
