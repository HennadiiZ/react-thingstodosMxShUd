import TodoItem from './TodoItem';
import React from 'react';
import Todo from '../models/todo';
import classes from '../components/Todos.module.css';

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

const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {

  return (
    <ul className={classes.todos}>
      { 
        props.items.map(item => {
          return (
            <TodoItem 
              id={item.id} 
              key={item.id} 
              text={item.text} 
              onRemoveItem={props.onRemoveTodo.bind(null, item.id)}
            />)
        })
      }
    </ul>
  );
}

export default Todos;

