import React from 'react'
import { Divider, Text } from "@chakra-ui/react"

import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <Text fontSize="3xl" fontWeight="bold" color="#555557">React Chat Application</Text>
      <Divider border="1%" color="55555c"/>
    </div>
    
  )
}

export default Header;