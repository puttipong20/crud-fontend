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
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const [user,setUser] = useState({})
    const navigate = useNavigate()
  const { id } = useParams();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const updateDetail = (data) => {
    const detail = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
    }
    axios.put(`http://localhost:8080/employees/${id}`,detail)
    .then((res) => console.log(res))
    navigate('/user/list')
  };
  const getUserId = (id) => {
    axios.get(`http://localhost:8080/employees/${id}`)
    .then((res) => {
        setUser(res.data)
    })
  }
  useEffect(() => {
    getUserId(id)
  },[id])
  useEffect(() => {
    if(user) {
        setValue('firstName',user.firstName)
        setValue('lastName',user.lastName)
        setValue('email',user.email)
    }
  },[user])
  return (
    <Container maxW={"container.md"}>
      <Center>
        <Heading>Add User</Heading>
      </Center>
      <form onSubmit={handleSubmit(updateDetail)}>
        <Controller
          name="firstName"
          defaultValue={""}
          rules={{ required: true }}
          control={control}
          render={({ field: { name, value, onChange } }) => (
            <FormControl isInvalid={errors[name]}>
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
            <FormControl isInvalid={errors[name]}>
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
            <FormControl isInvalid={errors[name]}>
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
            Update
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default Update;
