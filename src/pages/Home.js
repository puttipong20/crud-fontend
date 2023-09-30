import { Center, Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'

function Home() {
    // const getData = () => {
    //     fetch('http://localhost:8080/api/v1/employees').then(res => res.json()).then(data => console.log(data ))
    // }
    // useEffect(() => {
    //     getData()
    // },[])
  return (
    <Container maxW={'container.md'}>
        <Center>This is home pages.</Center>
    </Container>
  )
}

export default Home