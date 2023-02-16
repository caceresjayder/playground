import React from "react";
import { Card, CardBody, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function Task(props){
    
    return(
        <Card className={`${props.status === "Completed" ? `${props.Styles.Task} ${props.Styles.completed}` : `${props.Styles.Task}`}`}>
            <IconButton icon={<CloseIcon/>}
            onClick={() => props.onDelete(props.taskText)}
            size="xs"/>
            <CardBody>
            <Text textAlign="justify" fontSize={["xs","lg"]}
            onClick={() => props.onComplete(props.taskText)}
            >{props.Text}</Text>
            </CardBody>
        </Card>
    )
}


export default Task;
    