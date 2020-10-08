import React, { useEffect, useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/core";
import PostCard from "../inserts/PostCard";
import firebase from "gatsby-plugin-firebase";

const Home = () => {
  let postQuery = firebase.firestore().collection("posts").get();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setErr] = useState(null);

  useEffect(() => {
    postQuery
      .then((snap) => {
        setData(snap.docs);
        setLoading(false);
        console.log(snap.docs);
      })
      .catch((err) => {
        setErr([err.code, err.message]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Loading...</div>;
  }

  if (data !== null && !loading && !error) {
    return (
      <Flex justify="center" direction="column">
        <Text textAlign="center" fontSize="3xl">
          Welcome To The Harbor!
        </Text>

        <Box mt={10}>
          <Text textAlign="center" fontSize="xl">
            What's Popular Today
          </Text>
          <Box mt={5}>
            {data.map((post) => (
              <PostCard name={post.data().title} key={post.id} />
            ))}
          </Box>
        </Box>
      </Flex>
    );
  }
};

export default Home;
