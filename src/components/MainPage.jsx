import React, { useState } from "react";
import {
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import Links from './Links';

const projects = [
  {
    title: "Restaurant",
    to: "/Restaurant",
  },
  {
    title: "To Do App",
    to: "/toDoApp",
  },
  {
    title: "Login Page",
    to: "/login",
  },
];

export default function MainPage(props) {

  return (
    <Stack>
      <HStack h={100} bg="green.200" spacing={5} p={5}>
        <Heading textAlign={"center"}>Projects Playground</Heading>
      </HStack>
      <Stack p={5}>
      <Links projects={projects} name={"JavaScript Projects"} bg="yellow.300" buttonBg="whiteAlpha.900"/>
      </Stack>
    </Stack>
  );
}
