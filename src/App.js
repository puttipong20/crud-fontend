import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import User from "./pages/User";
import Update from "./pages/Update";
import Post from "./pages/Post";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Container maxW={"container.lg"}>
      <Navbar />
      <Flex>
        <Box maxW={"200px"} bg={"gray"} border={"1px "} px={5}>
          <Text cursor={"pointer"}>
            <Link to={'/post'}>post</Link>
          </Text>
          <Text cursor={"pointer"}>
            <Link to={'/user/list'}>user</Link>
          </Text>
          <Text cursor={"pointer"}>
            <Link to={'/user/add'}>add user</Link>
          </Text>
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/add" element={<NewPost />} />
            <Route path="/user/add" element={<AddUser />} />
            <Route path="/user/list" element={<User />} />
            <Route path="/user/:id" element={<Update />} />
          </Routes>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
