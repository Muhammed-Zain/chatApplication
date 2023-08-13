import { React, useContext } from 'react'
import { Box, Text, HStack } from "@chakra-ui/react"
import { FcLike } from "react-icons/fc"
import { Icon } from "@chakra-ui/react"
import  Avatar  from "react-avatar"
import { Context } from "../Context"

const Content = () => {
  const { messages, setMessages} = useContext(Context);

  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const time = hour + ":" + minute;
  const colours = ["#555555", "#666666", "#888888"];

  const randomColour = colours[Math.floor(Math.random() * colours.length)];

  const handleLike = (index) => {
    const updatedMessages = messages.map((message,indexEd) => {
      if (indexEd === index) {
        message.likeCount++;
      }
      return message;
    });
    setMessages(updatedMessages);  
  };


  return (
    <div>
      <Box  w="100%" h={{xl: "76vh", "2xl": "80vh"}}  bg="#edf1f5" overflow="auto" paddingTop="1%"  zIndex="4" m >
        {messages && messages.map((message, index) => (
          <div key={index}>
          
            <Avatar fgColor="#3182ce" bgColor="#343434" shape="circle" name={message.username}  display="inline-block"  round={true}  size="80" />
            <Text fontSize="lg" fontWeight="bold" color="#555557" display="inline-block" >{message.username}</Text>
            <Text fontSize="sm" fontWeight="hairline" color="#88888b" display="inline-block" marginLeft="2%">{time}</Text>
            <HStack>
              <Box padding="0.75%" bg="white" width="35%"  marginLeft="3%" borderRadius="0 20px 20px 20px">
                {message.message}
              </Box>
              <HStack marginLeft="1%">
                <Icon as ={FcLike} onClick={() => handleLike(index)} />  
                <Text>{message.likeCount > 0? message.likeCount: ""}</Text>
              </HStack>
            </HStack>
          </div>
        ))}
      </Box>
    </div>
  )
}

export default Content
