import React from "react"
import {VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge, useColorMode} from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa';



function Todo({todos, DeleteTodo}){

    const {colorMode, toggleColorMode} = useColorMode();

if(!todos.length) {
    return(
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg" w={[300, 400, 500]} fontSize="md">
            Nothing To-Do!
        </Badge>
    );
}

   

    return(
        <VStack
        divider={<StackDivider/>}
        borderColor="green.500"
        borderWidth="2px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
        alignItems="stretch"
        
        >
            {todos.map((todo) => (
                <HStack key={todo.id}>
                    <Text m="3" fontSize="x-large" color={colorMode === 'light' ? "green.600" : "green.100"}>{todo.body}</Text>
                    <Spacer />
                    <IconButton colorScheme="green" icon={<FaTrash />} isRound="True" onClick={() => DeleteTodo(todo.id)}></IconButton>
                </HStack>
            ))}
        </VStack>
    )
}

export default Todo;