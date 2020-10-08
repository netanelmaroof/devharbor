import { Box, Flex } from "@chakra-ui/core"
import React, { useEffect, useState } from "react"

const PostCard = props => {
  const genRand = () => {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  useEffect(() => {
    setCol(genRand())
  }, [])

  const [col, setCol] = useState()

  return (
    <Box minW="200" minH="200" borderWidth={1} borderColor={col} rounded="md">
      <Flex direction="column" align="center" justify="center">
        {props.name}
      </Flex>
    </Box>
  )
}

export default PostCard
