import { useEffect } from "react"

export default function useClickOutside(
  insideElementRef,
  conditionElementRef,
  cb
) {
  const handleClickOutside = (e) => {
    if (!conditionElementRef?.current.contains(e.target)) {
      if (
        insideElementRef.current &&
        !insideElementRef.current.contains(e.target)
      ) {
        cb()
      }
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])
}
