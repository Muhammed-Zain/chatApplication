import { React, useContext, useEffect, useState} from 'react'
import { Input, Button, Box, Icon } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { BsEmojiSmile } from "react-icons/bs"
import Picker from 'emoji-picker-react'
import { Context } from "../Context"
import "./Chat.css"



const Chat = () => {
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const [message, setMessage] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(false);
  
  const { messages, setMessages, username, setUsername } = useContext(Context);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(message.trim().length !== 0) {

      const newMessage = {
        username: user_list[Math.floor(Math.random() * user_list.length)],
        message: message,
        likeCount: 0,
      };

      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const onEmojiClick = (emojiObject, event) => {
    setMessage(message => message + emojiObject.emoji);
    setChosenEmoji(false);
  };


  useEffect(() => {
    const randomUsername = user_list[Math.floor(Math.random() * user_list.length)];
    setUsername(randomUsername);
  }, [username]);

  return (
    <Box className='chat'>
        <Input 
          placeholder='Type a message...' 
          width="45%" 
          p="1.5%"  
          borderRadius="20px" 
          focusBorderColor="#efefef" 
          bg="white" 
          value={message}
          onChange={handleChange} 
        />
        
        <Icon 
          as={BsEmojiSmile} 
          boxSize={5} 
          color="#878eac" 
          onClick={() => setChosenEmoji(!chosenEmoji)} 
          marginLeft="1%" 
          _hover={{color: "#3182ce"}} 
          _active={{color: "#3182ce"}}  
        />

        {chosenEmoji && (
          <Box position="absolute" top="45%" left="65%">
            <Picker onEmojiClick={onEmojiClick} width="100%"/>
          </Box>
        )}

      <Button onClick={handleSubmit} rightIcon={<ArrowForwardIcon bg="#3182ce" size="lg" _hover={{ bg: '#2b6fad' }}/>} colorScheme="blue" size="md" ml="30px">Send</Button>
    </Box>
  )
}

export default Chat