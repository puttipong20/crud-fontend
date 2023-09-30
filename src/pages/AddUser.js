import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  //functions
  const submitData = (data) => {
    // console.log(data)
    const allDetail = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    axios
      .post("http://localhost:8080/employees", allDetail)
      .then(() => console.log("Add successful."));
    navigate("/user/list");
  };
  return (
    <Container>
      <Center>
        <Heading>Add User</Heading>
      </Center>
      <form onSubmit={handleSubmit(submitData)}>
        <Controller
          name="firstName"
          defaultValue={""}
          rules={{ required: true }}
          control={control}
          render={({ field: { name, value, onChange } }) => (
            <FormControl>
              <FormLabel>First Name*</FormLabel>
              <Input value={value} name={name} onChange={onChange} />
            </FormControl>
          )}
        />
        <Controller
          name="lastName"
          defaultValue={""}
          rules={{ required: true }}
          control={control}
          render={({ field: { name, value, onChange } }) => (
            <FormControl>
              <FormLabel>Last Name*</FormLabel>
              <Input value={value} name={name} onChange={onChange} />
            </FormControl>
          )}
        />
        <Controller
          name="email"
          defaultValue={""}
          rules={{ required: true }}
          control={control}
          render={({ field: { name, value, onChange } }) => (
            <FormControl>
              <FormLabel>email*</FormLabel>
              <Input
                type="email"
                value={value}
                name={name}
                onChange={onChange}
              />
            </FormControl>
          )}
        />
        <Center>
          <Button type="submit" mt={2} colorScheme="green">
            Add
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default AddUser;
