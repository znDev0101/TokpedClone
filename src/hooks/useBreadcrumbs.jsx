import { useState, useEffect } from "react"

export function useBreadcrumbs(pathname, category, title) {
  const [urlPathname, setUrlPathname] = useState([])

  useEffect(() => {
    const urlPathname = pathname?.replace(/\//g, " > ")?.split(" ")
    for (let i = 0; i < urlPathname.length; i++) {
      if (urlPathname[i] == "")
        urlPathname[i] = category?.split(/'/).join("").replace(" ", "_")
      if (urlPathname[i] == "product_detail") urlPathname[i] = title
    }
    urlPathname.unshift("home")
    urlPathname.splice(1, 0, " > ")
    setUrlPathname(urlPathname.slice(0, 5))
  }, [category])

  return urlPathname
}
