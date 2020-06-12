import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  // 1: 通过这种可以直接解决不同时间段的renderx渲染情况， 可以输出最终的值
  const likeRef = useRef(0)
  // 2: domRef
  const didMountRef = useRef(false)
  // 3: 绑定dom元素
  const domRef = useRef<HTMLInputElement>(null)

  // 主题
  const theme = useContext(ThemeContext)
  const style = {
    color: theme.color,
    background: theme.background
  }


  useEffect(() => {
    document.title = `当前点击了${ like }次`
  }, [like])

  useEffect(() => {
    if (likeRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  const  handleAlertClick = () => {
    setTimeout(() => {
      // alert('you clicked on ' +  like)
      alert('you clicked on' + likeRef.current)
    }, 3000)
  }
  return (
    <div>
      <input type="text" ref={domRef} />
      <button style={style} onClick={() => { setLike(like + 1); likeRef.current++}}>
        { like } 👍
      </button>
      <button onClick={handleAlertClick}>alert</button>
    </div>
  )
}

export default LikeButton