import { VStack, Link as DefaultLink, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Links(props){
    return(
        <VStack borderWidth={1} p={10} width="fit-content" borderRadius={5} bg={props.bg}>
            <Heading size="md" mb={5}>{props.name}</Heading>
        {props.projects.map((project) => {
          return (
            <DefaultLink as={Link} href={project.to} borderWidth={1} p={2} width="90%" borderRadius={5} textAlign="center" bg={props.buttonBg} key={project.title}>{project.title}</DefaultLink>
          );
        })}
      </VStack>
    )
}