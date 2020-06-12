import { useState, useEffect } from 'react'
import axios from 'axios'

const UseURLLoader = (url: string = '', deps: any[] = []) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(({ data }) => {
      setData(data)
      setLoading(false)
    })
  }, deps)
  return [data, loading]
}

export default UseURLLoader