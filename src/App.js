
import {Heading} from '@chakra-ui/react'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import {VStack, IconButton, useColorMode} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {

  const initialTodos = [
    {
        id: 1,
        body: 'get bread',
    },
    {
        id: 2,
        body: 'get dako',
    },
];

const [todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem('todos')) || []
);

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])


function DeleteTodo(id) {
  const newTodos = todos.filter(todo => {
    return todo.id !== id;
  })
  setTodos(newTodos);
}

function addTodo(todo) {
  setTodos([...todos, todo]);
}

const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack p={4}>
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound="True" size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
     <Heading p='5' mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, green.200, green.300, green.600)" bgClip="text">What should I do?</Heading>
     <Todo todos={todos}  DeleteTodo={DeleteTodo}/>
     <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
