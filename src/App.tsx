import React, { useEffect, useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TS'),
  // ];

  const [todos, setTodos] = useState<Todo[]>([]);

  // useEffect(() => {}, []);

  const removeTodoHandler = (id: string) => {

    setTodos((prevItems) => {
      return prevItems.filter(item => item.id !== id)
    })
    console.log();
  };

  const onAddTodoHandler = (item: any) => {

    const newTodo = new Todo(item);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
    console.log(item);
    console.log(todos);

  }

  return (
    <React.Fragment>
      <NewTodo onAddTodo={onAddTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </React.Fragment>
  );
}

export default App;
