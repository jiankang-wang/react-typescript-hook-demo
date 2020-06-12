import { useState, useEffect } from 'react'

const UserMousePosition = () => {
  const [ positions, setPositions ] = useState({X: 0, Y: 0})
  useEffect(() => {
    const upPositions = (e: MouseEvent) => {
      setPositions({
        X: e.clientX,
        Y: e.clientY
      })
    }
    document.addEventListener('mousemove', upPositions)
    return () => {
      document.removeEventListener('mousemove', upPositions)
    }
  }, [])

  return positions
}

// 自定义Hook
// 说明: 自定义Hook的名称必须是大写开头的， 不然报错
export default UserMousePosition