import React, { useState } from 'react';
import Todo from '../models/todo';

export type TodoCtx = {
  items: Todo[],
  addTodo: (text: string | undefined) => void,
  removeTodo: (id: string) => void
}

export const todosContext = React.createContext<
TodoCtx
>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

export const TodosContextProvider: React.FC = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (item: any) => {
    const newTodo = new Todo(item);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
    console.log(item);
    console.log(todos);
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prevItems) => {
      return prevItems.filter(item => item.id !== id)
    })
    console.log();
  };

  const contextValue: TodoCtx = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <todosContext.Provider value={contextValue}>
      { props.children }
    </todosContext.Provider>
  );
};

export default TodosContextProvider;