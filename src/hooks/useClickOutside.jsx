import { useEffect } from "react"

export default function useClickOutside(mainRef, cb) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mainRef.current && !mainRef?.current?.contains(e.target)) {
        cb()
      }
      // console.log(!mainRef?.current?.contains(e.target))
    }
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])
}
