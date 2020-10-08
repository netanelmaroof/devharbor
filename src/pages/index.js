import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Text, Flex, Box, Stack } from "@chakra-ui/core"
import firebase from "gatsby-plugin-firebase"

const IndexPage = () => {
  const [error, setErr] = useState(null)

  function logIn() {
    let provider = new firebase.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        navigate("/app/home/")
      })
      .catch(err => {
        setErr(err.code + " - " + err.message)
      })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Flex justify="center" align="center" direction="column" mt={10}>
        {error !== null && <Text>{error}</Text>}
        <Text fontWeight="bold" fontSize="2xl">
          Welcome To DevHarbor!
        </Text>
        <Flex
          justify="center"
          align="center"
          minW="200px"
          minH="50px"
          bg="black"
          rounded="lg"
          boxShadow="sm"
          mt={10}
          onClick={logIn}
        >
          <Text fontWeight="bold" fontSize="xl">
            Sign In With Github
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="row" justify="center" textAlign="center" mt={10 * 8}>
        <Box m={5}>
          <Stack>
            <Text fontSize="xl" fontWeight="bold">
              Connect
            </Text>
            <Text>
              Meet other developers, find new software and tools, and discover
              awesome open-source projects on the Pier page.
            </Text>
          </Stack>
        </Box>
        <Box m={5}>
          <Stack>
            <Text fontSize="xl" fontWeight="bold">
              Group
            </Text>
            <Text>
              Create or join Crews, whether you want to manage dev roles on your
              project, set up an event, or whatever you come up with!
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
