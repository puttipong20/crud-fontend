import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate()
    const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //functions
  const newPost = (data) => {
    const allDetail = {
      title: data.title,
      content: data.content,
      email: data.email,
    };
    axios
      .post("http://localhost:8080/post", allDetail)
      .then((res) => console.log(res));
    navigate('/post')
  };
  return (
    <Container>
      <Center>
        <Text>New Post</Text>
      </Center>
      <form onSubmit={handleSubmit(newPost)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          defaultValue={""}
          render={({ field: { name, value, onChange } }) => (
            <FormControl isInvalid={errors[name]}>
              <FormLabel>Title*</FormLabel>
              <Input value={value} onChange={onChange} />
            </FormControl>
          )}
        />
        <Controller
          name="content"
          control={control}
          rules={{ required: true }}
          defaultValue={""}
          render={({ field: { name, value, onChange } }) => (
            <FormControl isInvalid={errors[name]}>
              <FormLabel>Content*</FormLabel>
              <Input value={value} onChange={onChange} />
            </FormControl>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          defaultValue={""}
          render={({ field: { name, value, onChange } }) => (
            <FormControl isInvalid={errors[name]}>
              <FormLabel>Email*</FormLabel>
              <Input type="email" value={value} onChange={onChange} />
            </FormControl>
          )}
        />
        <Center>
          <Button mt={4} colorScheme="blue" type="submit">
            Post
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default NewPost;
