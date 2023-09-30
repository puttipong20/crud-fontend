import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiLike, BiChat, BiShare, BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MenuDrop from "../components/MenuDrop";
function Post() {
  const [isTrigger, setIstrigger] = useState(false);
  const [allPost, setAllPost] = useState([]);
  const navigate = useNavigate();
  const getPost = () => {
    axios.get("http://localhost:8080/post").then((res) => {
      setAllPost(res.data);
    });
  };
  useEffect(() => {
    getPost();
  }, [isTrigger]);
  return (
    <Container maxW={"container.md"} border={"1px"}>
      <Flex justifyContent={"flex-end"}>
        <Box cursor={"pointer"} onClick={() => navigate("/post/add")}>
          <Text textDecoration={"underline"}>+ New Post</Text>
        </Box>
      </Flex>
      <Flex flexDirection={"column"}>
        {allPost.map((item, index) => (
          <Center>
            <Card mt={4} maxW="md" key={index}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">

                    <Box>
                      <Heading size="sm">{item.title}</Heading>
                      <Text>{item.email}</Text>
                    </Box>
                  </Flex>
                  <MenuDrop />
                  {/* <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BiDotsVerticalRounded />}
                  /> */}
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                 {item.content?item.content: "-"}
                </Text>
              </CardBody>
              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
          </Center>

        ))}
      </Flex>
    </Container>
  );
}

export default Post;
