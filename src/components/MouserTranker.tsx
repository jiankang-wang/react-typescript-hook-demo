import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ X: 0, Y: 0 })
  useEffect(() => {
    const upMousePosition = (e: MouseEvent) => {
      setPosition({
        X: e.clientX, Y: e.clientY
      })
    }
    document.addEventListener('click', upMousePosition)
    return () => {
      document.removeEventListener('click', upMousePosition)
    }
  }, [])
  
  return (
    <div>
      当前定位坐标 X: { position.X } Y: { position.Y }
    </div>
  )
}

export default MouseTracker