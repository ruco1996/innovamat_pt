import { useState, useEffect } from 'react'
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth <= 767)
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 767))
  }, [])

  return isMobile
}
