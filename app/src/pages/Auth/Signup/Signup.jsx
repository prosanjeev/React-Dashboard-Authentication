import { Button, Card, Center, Checkbox, Container, Flex, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p={6} borderRadius="16px" w="456px" >
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text mt={4} textStyle="p2" color="black.60">
            Create a free account by filling data below.
          </Text>

          <Stack mt={10} spacing={6}>
            <Flex gap={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="fname">First name</FormLabel>
              <Input placeholder="First name" name="fname"/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="lname">Last name</FormLabel>
              <Input placeholder="First name" name="lname" />
            </FormControl>
            </Flex>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input placeholder="name@email.com" name="email"/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="pass">Password</FormLabel>
              <Input type="password"  placeholder="******" name="pass" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="rpass" >Repeat Password</FormLabel>
              <Input type="password" placeholder="******" name="rpass"/>
            </FormControl>
            <Checkbox defaultChecked>I agree with <Text as="span" color="p.purple">Terms & Conditions.</Text>
            </Checkbox>
            <Button type="submit">Create Account</Button>
            <Text>Already have an account?  <Link to="/login"><Text as="span" color="p.purple">Log In</Text></Link> </Text>
           
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
