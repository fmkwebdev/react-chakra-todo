import { Button, DarkMode, HStack, Input, useToast } from "@chakra-ui/react";
import {React, useState} from "react";
import {nanoid }from 'nanoid';


function AddTodo({  addTodo }){
    const [content, setContent] = useState('');

    var toast = useToast();

    function HandleSubmit(e){
        e.preventDefault();
        if (!content){
            toast({
                title: 'Nincs semmi az input mezőbe írva.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        
        const todo = {
            id: nanoid(),
            body: content,
        }
        addTodo(todo);
        setContent('');
    }

    return(
        <form onSubmit={HandleSubmit}>
            <HStack mt="8">
                <Input variant="filled" placeholder="Chakra UI + React Todo App" w={[250, 340, 622]} h="20" fontSize="lg" bgColor="blackAlpha.200" value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button colorScheme="green" px="8" type="submit" h="20">
                        Hozzáadás
                </Button>
                
            </HStack>
        </form>
    )
}

export default AddTodo;