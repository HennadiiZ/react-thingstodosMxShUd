import TodoItem from './TodoItem';
import classes from '../components/Todos.module.css';

import React, { useContext } from 'react';
import { todosContext, TodoCtx } from '../store/todos-context';


// function Todos(props: any): React.FC {
//   return (
//     <ul>
//       {/* <Todo text={''}/> */}
//       { 
//         props.items.map(item => {
//           return <li>{item}</li>
//         })
//       }
//     </ul>
//   );
// }

const Todos: React.FC = () => {
  
  const todosCtx: TodoCtx = useContext(todosContext);

  return (
    <ul className={classes.todos}>
      { 
        todosCtx.items.map(item => {
          return (
            <TodoItem 
              id={item.id} 
              key={item.id} 
              text={item.text} 
              onRemoveItem={todosCtx.removeTodo.bind(null, item.id)}
            />)
        })
      }
    </ul>
  );
}

export default Todos;

