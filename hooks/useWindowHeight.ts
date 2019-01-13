import { useEffect, useState } from 'react'

export const useWindowHeight = () => {
  const [height, setHeight] = useState('100vh')

  useEffect(() => {
    const handleResize = () => setHeight(`${window.innerHeight}px`)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return height
}
