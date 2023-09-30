import {
  Button,
  Container,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
  const [isTrigger,setIstrigger] = useState(false)
  //functions

  const deleteData = (id) => {
    axios.delete(`http://localhost:8080/employees/${id}`).then((res) => console.log(res))
    setIstrigger(!isTrigger)
  }
  const getUser = () => {
    axios.get("http://localhost:8080/employees").then((res) => {
      setAllUser(res.data);
    });
  };
  useEffect(() => {
    getUser();
  }, [isTrigger]);
  return (
    <Container maxW={"container.md"}>
      <Button my={2} colorScheme="blue" onClick={() => setIstrigger(!isTrigger)}>Refresh</Button>
      <Table my={2}>
        <Thead bgColor={"green.200"}>
          <Tr>
            <Th textAlign={"center"}>ID</Th>
            <Th textAlign={"center"}>First Name</Th>
            <Th textAlign={"center"}>Last Name</Th>
            <Th textAlign={"center"}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allUser.map((item, index) => (
            <Tr key={index}>
              <Td textAlign={"center"}>{item.id}</Td>
              <Td textAlign={"center"}>{item.firstName}</Td>
              <Td textAlign={"center"}>{item.lastName}</Td>
              <Td textAlign={"center"}>
                <Button
                  mx={1}
                  colorScheme="yellow"
                  onClick={() => navigate(`/user/${item.id}`)}
                >
                  edit
                </Button>
                <Button
                  mx={1}
                  colorScheme="red"
                  onClick={() => deleteData(item.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}

export default User;
