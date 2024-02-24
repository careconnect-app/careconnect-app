import { useLayoutEffect, useState } from "react"
import useIsSsr from "@/hooks/useIsSsr"
 
const useWindowResize = () => {
  const isSsr = useIsSsr()
  const [size, setSize] = useState([
    typeof window !== "undefined" ? window.innerWidth : 0,
    typeof window !== "undefined" ? window.innerHeight : 0,
  ])
  useLayoutEffect(() => {
    if (isSsr) {
      return
    }
    setSize([window.innerWidth, window.innerHeight])
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    if (!isSsr) {
      window.addEventListener("resize", updateSize)
      updateSize()
    }
    return () => window.removeEventListener("resize", updateSize)
  }, [isSsr])
  return size
}
 
export default useWindowResize
 