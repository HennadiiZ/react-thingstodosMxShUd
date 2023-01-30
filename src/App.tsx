import React from 'react';
import './App.css';
import Todos from './components/Todos';
// import Todo from './models/todo';
import NewTodo from './components/NewTodo';

import TodosContextProvider from './store/todos-context';


function App() {
  // const todosCtx: TodoCtx = useContext(todosContext);
  // const [todos, setTodos] = useState<Todo[]>([]);

  // // useEffect(() => {}, []);

  // const onAddTodoHandler = (item: any) => {
  //   const newTodo = new Todo(item);
  //   setTodos((prevState) => {
  //     return prevState.concat(newTodo);
  //   });
  //   console.log(item);
  //   console.log(todos);
  // }

  // const removeTodoHandler = (id: string) => {
  //   setTodos((prevItems) => {
  //     return prevItems.filter(item => item.id !== id)
  //   })
  //   console.log();
  // };

  return (
    <TodosContextProvider>
      {/* <NewTodo onAddTodo={todosCtx.onAddTodoHandler}/>
      <Todos items={todosCtx.todos} onRemoveTodo={todosCtx.removeTodoHandler}/> */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
