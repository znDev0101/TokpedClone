import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs"

const BreadCrumbs = ({ title, category }) => {
  const { pathname } = useLocation()

  const breadCrumbs = useBreadcrumbs(pathname, category, title)

  return (
    <div className="hidden px-20 mt-32 lg:flex gap-x-2 items-center">
      {breadCrumbs.map((data, index) => {
        return (
          <>
            <span key={index}>
              <Link
                to={
                  data == "home"
                    ? "/"
                    : !data?.toLowerCase().includes(title?.toLowerCase()) &&
                      `/products/category/${data}`
                }
                className="text-sm text-green-600">
                {data?.length > 20
                  ? `${data?.replace("_", " ").slice(0, 30)}....`
                  : data?.replace("_", " ")}
              </Link>
            </span>
          </>
        )
      })}
    </div>
  )
}

export default BreadCrumbs
