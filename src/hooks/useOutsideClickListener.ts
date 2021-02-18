import { useEffect, useRef } from 'react'

function useOutsideClickListener(ref: any, handler: any) {
  const savedHandler = useRef<any>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler, savedHandler])

  useEffect(() => {
    const isSupported = window && window.addEventListener
    if (!isSupported) return

    const eventListener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        return savedHandler.current(event)
      }
    }

    window.addEventListener('mousedown', eventListener)

    return () => {
      window.removeEventListener('mousedown', eventListener)
    }
  }, [savedHandler, ref])
}

export default useOutsideClickListener
