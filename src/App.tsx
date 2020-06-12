import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTrancker from './components/MouserTranker'
import userMousePosition from './hooks/useMousePosition'
import userUrlLoading from './hooks/useURLLoader'

interface IShowResult {
  message: string,
  status: string
}

// 主题
interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const themes: IThemeProps = {
  'light': {
    color:'#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background:'#222'
  }
}
export const ThemeContext = React.createContext(themes.dark)

function App() {
  const [show, setShow] = useState(false)
  const position = userMousePosition()
  const [data, loading] = userUrlLoading('https://dog.ceo/api/breeds/image/random', [show])
  const dogData = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <span>
            Learn React
          </span>
          <Hello message={ 'hello world' }/>
          <LikeButton />
          <button onClick={() => setShow(!show)}>Toggle Tranker</button>
          {
            show && <MouseTrancker />
          }
          <p>Y: { position.X }  Y: { position.Y }</p>
          {
            loading ? <p>dog 读取中</p>: 
            <img src={ dogData && dogData.message} alt="" />
          }
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App
