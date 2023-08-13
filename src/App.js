import { useState, React } from 'react'
import Header from "./components/Header"
import Content from './components/Content'
import Chat  from "./components/Chat"
import { ChakraProvider } from "@chakra-ui/react"
import { Context } from "./Context"
import "./App.css"


const App = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  return (
    <div>
      <Context.Provider value={{ messages, setMessages, username, setUsername, likeCount, setLikeCount }}>
        <ChakraProvider>
          <Header />
          <Content />
          <Chat />
        </ChakraProvider>
      </Context.Provider>
    </div>
  )
}

export default App;