import React, { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerWidth
  })

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(prev => ({
        width: window.innerWidth,
        height: window.innerHeight
      }))
    }

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize)
  }

  }, [windowSize])

  return {width: windowSize.width, height: windowSize.height}
}

export default useWindowSize