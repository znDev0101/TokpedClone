import { useEffect } from "react"

export default function useClickOutside(mainRef, cb, opsiRef) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!opsiRef?.current?.contains(e.target)) {
        if (mainRef?.current && !mainRef?.current?.contains(e.target)) {
          cb()
        }
        console.log("TRUE")
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])
}
