import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container maxW={"container.lg"} bg={'green.300'} py={3} border={'2px'}>
      <Flex justifyContent={"space-between"} w={'100%'} h={'100%'} alignItems={'center'}>
        <Box>
          <Heading>Logo</Heading>
        </Box>
        <Box>
          <Flex>
            <Text textAlign={"center"} ml={2}>
              <Link to={"/"}>Home</Link>
            </Text>
            <Text textAlign={"center"} ml={2}>
              <Link to={"/post"}>Post</Link>
            </Text>
            <Text textAlign={"center"} ml={2}>
              <Link to={"/user/list"}>User</Link>
            </Text>
            <Text textAlign={"center"} ml={2}>
              <Link to={"/user/add"}>Add</Link>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

export default Navbar;
