import { useState } from 'react'
import reactLogo from './assets/react.svg'
import msLogo from './assets/28352-9-microsoft-logo-free-download.png'
import './App.css'
import Chat from './Chat'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [talk, setTalk] = useState(false)
  function counterUp(){
    setCount(count + 1)
    console.log(talk)
  }

  function counterDown(){
    setCount(count - 1)
  }

  function toggleShowChat(){
    setTalk(prevTalk => !prevTalk)
    console.log("talk button pushed")
    console.log(talk)
  }

  const chats = data.map(item => 
    <Chat message={item.message} sender={item.sender} /> )
  

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://reactjs.org" target="_blank">
          <img src={msLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={msLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={counterUp}>
          More chat
        </button>
        <button onClick={counterDown}>
          Less Chat
        </button>
        <div>
          Chat index: {count}
        </div>
      </div>
      <div>

      </div>
      <div className="chat-area">
        {chats.slice(0,count+1)}
      </div>
    </div>
  )
}

export default App
